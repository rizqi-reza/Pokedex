import { IPokeEvo, IPokeEvoDetail, IPokeSpecies } from '@interfaces/ipokemon';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVOLUTION } from '@utils/graphqlQuery';
import { Grid } from '@styles/grid.styles';
import { formatText, parseUrlParam } from '@utils/string';
import { PokeEvoTrigger } from '@styles/pokemon.styles';
import { pokeImageBaseUrl } from '@utils/constant';
import Image from 'next/image';
import { Skeleton } from '@styles/skeleton.styles';

const Evolution: React.FC<IPokeSpecies> = ({ evolution_chain }) => {
  const evoId = parseUrlParam(evolution_chain?.url);

  const [pokemonEvo, setPokemonEvo] = useState<IPokeEvo>();

  const { loading: loadingEvo } = useQuery(GET_EVOLUTION, {
    skip: !evoId,
    variables: { id: evoId },
    onCompleted: (data) => {
      const pokeEvo: IPokeEvo = data?.evolutionChain?.response?.chain;
      setPokemonEvo(pokeEvo);
    },
    onError: (error) => alert(error),
  });

  const getPokemonImage = (url: string) => {
    const imageId = parseUrlParam(url);
    const imageUrl = `${pokeImageBaseUrl}${imageId}.png`;
    return <Image src={imageUrl} alt="poke_evo_image" width={120} height={120} layout="fixed" />;
  };

  const getEvolveTrigger = (pokeEvoDetail: IPokeEvoDetail) => {
    const {
      trigger,
      min_level,
      min_happiness,
      min_affection,
      min_beauty,
      item,
      known_move,
      known_move_type,
      location,
      held_item,
      time_of_day,
    } = pokeEvoDetail;

    const evoAction: string[] = [];
    if (min_level) {
      evoAction.push(`Min Level ${min_level}`);
    }
    if (min_happiness) {
      evoAction.push(`Min Happines ${min_happiness}`);
    }
    if (min_affection) {
      evoAction.push(`Min Affection ${min_affection}`);
    }
    if (min_beauty) {
      evoAction.push(`Min Beauty ${min_beauty}`);
    }
    if (item) {
      evoAction.push(formatText(item?.name));
    }
    if (known_move) {
      evoAction.push(`Move ${formatText(known_move?.name)}`);
    }
    if (known_move_type) {
      evoAction.push(`Know ${formatText(known_move_type?.name)} Move`);
    }
    if (location) {
      evoAction.push(`Near ${formatText(location?.name)}`);
    }
    if (held_item) {
      evoAction.push(`Held item ${formatText(held_item?.name)}`);
    }
    if (time_of_day !== '') {
      evoAction.push(`${formatText(time_of_day)}time`);
    }

    return (
      <PokeEvoTrigger>
        <span style={{ fontSize: 32 }}>&rarr;</span>
        <span>{formatText(trigger?.name)}</span>
        <span>({evoAction?.join(', ')})</span>
      </PokeEvoTrigger>
    );
  };

  const evoList = (pokeEvo: IPokeEvo) => {
    if (pokeEvo?.evolves_to.length > 0) {
      return (
        <>
          <Grid style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: 20 }}>
            <PokeEvoTrigger>
              {getPokemonImage(pokeEvo?.species?.url)}
              <span>{formatText(pokeEvo?.species.name)}</span>
            </PokeEvoTrigger>
            <div>
              {pokeEvo?.evolves_to?.map((evo: IPokeEvo) => (
                <Grid>
                  <div>
                    {evo?.evolution_details?.map((evoDetails: IPokeEvoDetail) =>
                      getEvolveTrigger(evoDetails),
                    )}
                  </div>
                  <PokeEvoTrigger>
                    {getPokemonImage(evo?.species?.url)}
                    <span>{formatText(evo.species.name)}</span>
                  </PokeEvoTrigger>
                </Grid>
              ))}
            </div>
          </Grid>
          {pokeEvo?.evolves_to?.map((evo) => evoList(evo))}
        </>
      );
    }
  };

  const notEvolve = !pokemonEvo || pokemonEvo?.evolves_to?.length <= 0;

  return (
    <>
      <h3>Evolution Chain</h3>
      {loadingEvo ? (
        <Skeleton height={250} />
      ) : notEvolve ? (
        <p>This pokemon does not evolve.</p>
      ) : (
        evoList(pokemonEvo)
      )}
    </>
  );
};
export default Evolution;

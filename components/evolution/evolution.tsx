import { IPokeEvo, IPokeEvoDetail, IPokeSpecies } from '@interfaces/ipokemon';
import React, { Fragment, useState } from 'react';
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

  const getEvolveTrigger = (pokeEvoDetail: IPokeEvoDetail, index: number) => {
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
      <PokeEvoTrigger key={index}>
        <span style={{ fontSize: 32 }}>&rarr;</span>
        <span>{formatText(trigger?.name)}</span>
        <span>({evoAction?.join(', ')})</span>
      </PokeEvoTrigger>
    );
  };

  const getEvolveImage = (pokeEvo: IPokeEvo) => {
    return (
      <PokeEvoTrigger>
        {getPokemonImage(pokeEvo?.species?.url)}
        <span>{formatText(pokeEvo?.species.name)}</span>
      </PokeEvoTrigger>
    );
  };

  const evoList = (pokeEvo: IPokeEvo, index: number) => {
    if (pokeEvo?.evolves_to.length > 0) {
      return (
        <Fragment key={index}>
          <Grid style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: 20 }}>
            {getEvolveImage(pokeEvo)}
            <div>
              {pokeEvo?.evolves_to?.map((evo: IPokeEvo, index: number) => (
                <Grid key={index}>
                  <div>
                    {evo?.evolution_details?.map(
                      (evoDetails: IPokeEvoDetail, indexDetail: number) =>
                        getEvolveTrigger(evoDetails, indexDetail),
                    )}
                  </div>
                  {getEvolveImage(evo)}
                </Grid>
              ))}
            </div>
          </Grid>
          {pokeEvo?.evolves_to?.map((evo) => evoList(evo, index + 1))}
        </Fragment>
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
        evoList(pokemonEvo, 0)
      )}
    </>
  );
};
export default Evolution;

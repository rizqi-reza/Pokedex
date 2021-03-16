import { IPokeEvo, IPokeEvoDetail, IPokeSpecies } from '@interfaces/ipokemon';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVOLUTION } from '@utils/graphqlQuery';
import { Grid } from '@styles/grid.styles';
import { formatText, parseUrlParam } from '@utils/string';
import { PokeEvoTrigger } from '@styles/pokemon.styles';
import { pokeImageBaseUrl } from '@utils/constant';
import Image from 'next/image';

const Evolution: React.FC<IPokeSpecies> = ({ id, evolution_chain }) => {
  const evoId = parseUrlParam(evolution_chain?.url);

  const [pokemonEvo, setPokemonEvo] = useState<IPokeEvo>();

  const { loading: loadingEvo } = useQuery(GET_EVOLUTION, {
    skip: !evoId,
    variables: { id: evoId },
    onCompleted: (data) => {
      const pokeEvo: IPokeEvo = data?.evolutionChain?.response?.chain;
      setPokemonEvo(pokeEvo);
    },
  });

  const getPokemonImage = (url: string) => {
    const imageId = parseUrlParam(url);
    const imageUrl = `${pokeImageBaseUrl}${imageId}.png`;
    return <Image src={imageUrl} alt="poke_evo_image" width={120} height={120} layout="fixed" />;
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
                    {evo?.evolution_details?.map((evo: IPokeEvoDetail) => (
                      <PokeEvoTrigger>
                        <span>&rarr;</span>
                        <span>
                          {formatText(evo.trigger?.name)} ({evo.min_level})
                        </span>
                      </PokeEvoTrigger>
                    ))}
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

  return (
    <>
      <h3>Evolution Chain</h3>
      {evoList(pokemonEvo)}
    </>
  );
};
export default Evolution;

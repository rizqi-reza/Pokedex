import { IPokeEvo, IPokeSpecies } from '@interfaces/ipokemon';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVOLUTION } from '@utils/graphqlQuery';

const Evolution: React.FC<IPokeSpecies> = ({ evolution_chain }) => {
  const evoUrlParam = evolution_chain?.url?.split('/');
  const evoId = evoUrlParam[evoUrlParam.length - 2];
  console.log(evoId);

  const [pokemonEvo, setPokemonEvo] = useState<IPokeEvo>();

  const { loading: loadingData, error } = useQuery(GET_EVOLUTION, {
    skip: !evoId,
    variables: { id: evoId },
    onCompleted: (data) => {
      console.log(data);
      const pokeEvo: IPokeEvo = data?.evolutionChain?.response?.chain;
      setPokemonEvo(pokeEvo);
    },
  });
  console.log(pokemonEvo);

  return (
    <>
      <h3>Evolution Chain</h3>
      Pokemon Evo
    </>
  );
};
export default Evolution;

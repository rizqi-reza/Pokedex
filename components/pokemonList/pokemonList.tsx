import { useQuery } from '@apollo/client';
import Pokemon from '@components/pokemon';
import { IPokemon } from '@interfaces/ipokemon';
import { GET_POKEMON_LIST } from '@utils/graphqlQuery';
import React, { useState } from 'react';
import { Grid } from 'styles/grid.styles';

const PokemonList: React.FC<{ owned: boolean }> = ({ owned }) => {
  const { loading, data, error } = useQuery(GET_POKEMON_LIST, {
    skip: owned,
    variables: { limit: 10, offset: 0 },
  });

  const pokemons: IPokemon[] = data?.pokemons?.results;

  return (
    <>
      <Grid>
        {pokemons?.map((pokemon: IPokemon, index: number) => (
          <Pokemon {...pokemon} key={index} />
        ))}
      </Grid>
    </>
  );
};

export default PokemonList;

import { useQuery } from '@apollo/client';
import Pokemon from '@components/pokemon';
import { IParam } from '@interfaces/igraphql';
import { IPokemon } from '@interfaces/ipokemon';
import { defaultVariables } from '@utils/constant';
import { GET_POKEMON_LIST } from '@utils/graphqlQuery';
import React, { useEffect, useState } from 'react';
import { Grid } from '@styles/grid.styles';
import { usePalette } from 'react-palette';
import { PokeWrapper } from '@styles/pokemon.styles';
import PokemonDetails from '@components/pokemonDetails';
import { Skeleton } from '@styles/skeleton.styles';

const PokemonList: React.FC<{ owned: boolean }> = ({ owned }) => {
  const [variables, setVariables] = useState<IParam>(defaultVariables);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>();
  const [nextOffset, setNextOffset] = useState<number>(0);
  const [totalData, setTotalData] = useState<number>(0);

  const { data: pokemonColor, loading: loadingColor } = usePalette(selectedPokemon?.image);

  const { loading, error } = useQuery(GET_POKEMON_LIST, {
    skip: owned,
    variables,
    onCompleted: (data) => {
      const list = data?.pokemons;
      const result = list?.results || [];
      const pokeData = [...pokemons, ...result];
      setPokemons(pokeData);
      setTotalData(list?.count);
      setNextOffset(list?.nextOffset);
    },
  });

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  });

  const canLoadMore = nextOffset <= totalData;

  const handleOnScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 50;
    if (scrolledToBottom) {
      setVariables({ ...variables, offset: nextOffset });
    }
  };

  const handleCloseDetail = () => {
    setSelectedPokemon(undefined);
  };

  const handleOpenDetail = (name: string) => {
    const pokemon = pokemons.find((pokemon) => pokemon.name === name);
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <PokeWrapper>
        <Grid>
          {pokemons?.map((pokemon: IPokemon, index: number) => (
            <Pokemon {...pokemon} key={index} onClick={handleOpenDetail} />
          ))}
        </Grid>
        {canLoadMore && <p style={{ textAlign: 'center' }}>Scroll to load more</p>}
        {loading && <Skeleton marginTop={8}>Loading...</Skeleton>}
      </PokeWrapper>
      <PokemonDetails
        pokemon={selectedPokemon}
        showDetail={Boolean(selectedPokemon)}
        onClose={handleCloseDetail}
      />
    </>
  );
};

export default PokemonList;

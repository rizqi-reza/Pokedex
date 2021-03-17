import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Pokemon from '@components/pokemon';
import { IParam } from '@interfaces/igraphql';
import { IPokemon } from '@interfaces/ipokemon';
import { defaultVariables } from '@utils/constant';
import { GET_POKEMON_LIST } from '@utils/graphqlQuery';
import { Grid } from '@styles/grid.styles';
import { PokeEmpty, PokeWrapper } from '@styles/pokemon.styles';
import PokemonDetails from '@components/pokemonDetails';
import { Skeleton } from '@styles/skeleton.styles';
import { getMyPokemon } from '@utils/localStorage';

const PokemonList: React.FC<{ owned?: boolean }> = ({ owned }) => {
  const [variables, setVariables] = useState<IParam>(defaultVariables);
  const [pokedex, setPokedex] = useState<IPokemon[]>([]);
  const [myPokemons, setMyPokemons] = useState<IPokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>();
  const [nextOffset, setNextOffset] = useState<number>(0);
  const [totalData, setTotalData] = useState<number>(0);

  const pokeSource = owned ? myPokemons : pokedex;
  const canLoadMore = Boolean(nextOffset <= totalData && !owned);

  const { loading } = useQuery(GET_POKEMON_LIST, {
    skip: owned,
    variables,
    onCompleted: (data) => {
      const list = data?.pokemons;
      const result = list?.results || [];
      const pokeData = [...pokedex, ...result];
      setPokedex(pokeData);
      setTotalData(list?.count);
      setNextOffset(list?.nextOffset);
    },
    onError: (error) => alert(error),
  });

  useEffect(() => {
    if (owned) {
      const pokeData = getMyPokemon();
      setMyPokemons(pokeData);
    }
  }, [owned]);

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  });

  const handleOnScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight + 30;
    if (scrolledToBottom) {
      setVariables({ ...variables, offset: nextOffset });
    }
  };

  const handleCloseDetail = () => {
    setSelectedPokemon(undefined);
  };

  const handleOpenDetail = (name: string) => {
    const pokemon = pokeSource?.find((pokemon) => pokemon.name === name);
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <PokeWrapper>
        <h2>{owned ? 'My Pokémon' : 'Pokédex'}</h2>
        <p>{owned ? 'List of catched pokemon' : 'List of all pokemon'}</p>
        <Grid template={'repeat(2, 1fr)'}>
          {pokeSource?.map((pokemon: IPokemon, index: number) => (
            <Pokemon {...pokemon} key={index} onClick={handleOpenDetail} />
          ))}
        </Grid>
        {canLoadMore && !loading && (
          <h2 style={{ textAlign: 'center', fontSize: 16 }}>Scroll to load more</h2>
        )}
        {loading && <Skeleton marginTop={8}>Loading...</Skeleton>}
        {!loading && owned && !pokeSource && (
          <PokeEmpty>
            &#128546;
            <h5>You don't catch any pokémon</h5>
          </PokeEmpty>
        )}
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

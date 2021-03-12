import { useQuery } from '@apollo/client';
import Pokemon from '@components/pokemon';
import { IParam } from '@interfaces/igraphql';
import { IPokemon, IPokeType } from '@interfaces/ipokemon';
import { defaultVariables, pokeBall } from '@utils/constant';
import { GET_POKEMON, GET_POKEMON_LIST } from '@utils/graphqlQuery';
import { capitalize, isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Grid } from '@styles/grid.styles';
import { Skeleton } from '@styles/skeleton.styles';
import Image from 'next/image';
import { usePalette } from 'react-palette';
import Modal from '@components/modal';
import { PokeInfo, PokeTitle, PokeType } from '@styles/pokemon.styles';
import { getFormattedId } from '@utils/string';

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

  const { loading: loadingDetail, error: errorDetail } = useQuery(GET_POKEMON, {
    skip: !selectedPokemon,
    variables: { name: selectedPokemon?.name },
    onCompleted: (data) => {
      const pokeData = data?.pokemon;
      setSelectedPokemon({ ...selectedPokemon, ...pokeData });
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
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 20;
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
      <Grid>
        {pokemons?.map((pokemon: IPokemon, index: number) => (
          <Pokemon {...pokemon} key={index} onClick={handleOpenDetail} />
        ))}
      </Grid>
      {canLoadMore && <p style={{ textAlign: 'center' }}>Scroll to load more</p>}
      {loading && <Skeleton marginTop={8}>Loading...</Skeleton>}

      <Modal
        show={!isEmpty(selectedPokemon)}
        onClose={handleCloseDetail}
        title={pokeBall()}
        info={
          <PokeInfo>
            <PokeTitle>
              <h2>{capitalize(selectedPokemon?.name)}</h2>
              <h3>{getFormattedId(selectedPokemon?.id)}</h3>
            </PokeTitle>
            <PokeType>
              {selectedPokemon?.types?.map((type: IPokeType) => (
                <span>{capitalize(type.type.name)}</span>
              ))}
            </PokeType>
          </PokeInfo>
        }
        color={pokemonColor.lightMuted}
        as="drawer"
      >
        {selectedPokemon && (
          <Modal.Image>
            <Image
              src={selectedPokemon.image}
              alt={selectedPokemon.name}
              width={220}
              height={220}
            />
          </Modal.Image>
        )}
        <Modal.Body>
          {loadingDetail ? <Skeleton marginTop={8}>Loading...</Skeleton> : <>Showed</>}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PokemonList;

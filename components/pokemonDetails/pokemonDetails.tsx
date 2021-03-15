import React, { useEffect, useState } from 'react';
import { IPokemon, IPokemonDetail, IPokeType } from '@interfaces/ipokemon';
import Tabs from '@components/tabs';
import About from '@components/about';
import {
  PokeInfo,
  PokeHeaderWrapper,
  PokeType,
  PokeImage,
  PokeAction,
} from '@styles/pokemon.styles';
import { language, pokeBall } from '@utils/constant';
import { formatText, getFormattedId } from '@utils/string';
import { isEmpty } from 'lodash';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '@utils/graphqlQuery';
import Image from 'next/image';
import { Grid } from '@styles/grid.styles';
import { Skeleton } from '@styles/skeleton.styles';
import SheetModal from '@components/sheet';
import { ModalClose } from '@styles/modal.styles';
import Stats from '@components/stats';
import Evolution from '@components/evolution';

const PokemonDetails: React.FC<IPokemonDetail> = ({ pokemon, showDetail, onClose }) => {
  const [loadingSpecies, setLoadingSpecies] = useState<boolean>(false);
  const [pokemonInfo, setPokemonInfo] = useState<IPokemon>(pokemon);
  const [showImage, setShowImage] = useState<boolean>(true);
  const { id, name, image, types, species, stats, pokeSpecies } = pokemonInfo || {};
  const { color, genera } = pokeSpecies || {};

  const { loading: loadingData, error } = useQuery(GET_POKEMON, {
    skip: !showDetail || !pokemon || isEmpty(pokemon?.name),
    variables: { name: pokemon?.name },
    onCompleted: (data) => {
      const pokeData = data?.pokemon;
      setPokemonInfo({ ...pokemon, ...pokeData });
    },
  });

  useEffect(() => {
    // get species details using rest api (graphql version not completed yet)
    if (species) {
      const fetchSpecies = async () => {
        // setLoadingSpecies(true);
        const response = await fetch(species.url);
        const pokeSpecies = await response.json();
        setPokemonInfo({ ...pokemonInfo, pokeSpecies });
        setLoadingSpecies(false);
      };

      fetchSpecies();
    }
  }, [species]);

  const loading = loadingData || loadingSpecies;
  const genus = genera?.find((gen) => gen.language.name === language)?.genus;

  const handleClose = () => {
    setPokemonInfo(undefined);
    onClose();
  };

  const handleSnap = (index) => {
    if (index === 0) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  };

  const handleCatch = () => {
    const successRate = Math.random();
    if (successRate < 0.5) {
      alert('The pokemon managed to escape');
    } else {
      alert('You caught a pokemon, lets give it a nickname!');
    }
  };

  const skeletonDetails = () => (
    <>
      <Skeleton marginTop={8} />
      <Grid>
        <Skeleton marginTop={8} />
        <Skeleton marginTop={8} />
        <Skeleton marginTop={8} />
        <Skeleton marginTop={8} />
        <Skeleton marginTop={8} />
        <Skeleton marginTop={8} />
        <Skeleton marginTop={8} />
        <Skeleton marginTop={8} />
      </Grid>
    </>
  );

  return (
    <SheetModal
      show={showDetail}
      onClose={handleClose}
      onSnap={handleSnap}
      snapPoints={[600, 400]}
      initialSnap={1}
      backdropColor={color?.name}
      customBackdrop={
        <PokeInfo>
          <PokeHeaderWrapper>
            {pokeBall()}
            <ModalClose onClick={handleClose}>&times;</ModalClose>
          </PokeHeaderWrapper>
          <PokeHeaderWrapper>
            <h2>{formatText(name)}</h2>
            <h3>{getFormattedId(id)}</h3>
          </PokeHeaderWrapper>
          <PokeHeaderWrapper>
            <PokeType>
              {types?.map((type: IPokeType, index: number) => (
                <span key={index}>{formatText(type.type.name)}</span>
              ))}
            </PokeType>
            <b>{genus}</b>
          </PokeHeaderWrapper>

          {image && (
            <PokeImage show={showImage}>
              <Image src={image} alt={name} width={220} height={220} />
            </PokeImage>
          )}

          <PokeAction variant="catch" onClick={handleCatch}>
            {pokeBall(true)}
          </PokeAction>
        </PokeInfo>
      }
    >
      {loading ? (
        skeletonDetails()
      ) : (
        <>
          <Tabs withBorder>
            <Tabs.Item title="About">
              <About {...pokemonInfo} />
            </Tabs.Item>
            <Tabs.Item title="Base Stats">
              <Stats stats={stats} />
            </Tabs.Item>
            <Tabs.Item title="Evolution">
              <Evolution {...pokeSpecies} />
            </Tabs.Item>
            <Tabs.Item title="Moves">Moves</Tabs.Item>
          </Tabs>
        </>
      )}
    </SheetModal>
  );
};

export default PokemonDetails;

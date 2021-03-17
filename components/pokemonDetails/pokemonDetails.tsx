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
  PokeDetailWrapper,
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
import Stats from '@components/stats';
import Evolution from '@components/evolution';
import Moves from '@components/moves';
import Modal from '@components/modal';
import { SheetClose } from '@styles/sheet.styles';
import Button from '@components/button';

const PokemonDetails: React.FC<IPokemonDetail> = ({ pokemon, showDetail, onClose }) => {
  const [loadingAction, setLoadingAction] = useState<boolean>(false);
  const [loadingSpecies, setLoadingSpecies] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemonInfo, setPokemonInfo] = useState<IPokemon>(pokemon);
  const [showImage, setShowImage] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { id, name, image, types, species, stats, moves, pokeSpecies } = pokemonInfo || {};
  const { color, genera } = pokeSpecies || {};

  const { loading: loadingData } = useQuery(GET_POKEMON, {
    skip: !showDetail || !pokemon || isEmpty(pokemon?.name),
    variables: { name: pokemon?.name },
    onCompleted: (data) => {
      const pokeData = data?.pokemon;
      setPokemonInfo({ ...pokemon, ...pokeData });
    },
    onError: (error) => alert(error),
  });

  useEffect(() => {
    // get species details using rest api (graphql version not completed yet)
    if (species) {
      const fetchSpecies = async () => {
        setLoadingSpecies(true);
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

  const handleCloseSheet = () => {
    setPokemonInfo(undefined);
    setActiveTab(0);
    onClose();
  };

  const handleSnapSheet = (index) => {
    if (index === 0) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  };

  const handleCatch = () => {
    setLoadingAction(true);
    const catchPokemon = () => {
      const successRate = Math.random();
      if (successRate < 0.5) {
        setIsSuccess(false);
      } else {
        setIsSuccess(true);
      }
      setShowModal(true);
      setLoadingAction(false);
    };

    setTimeout(catchPokemon, 3000);
  };

  const handleChangeTab = (index: number) => {
    setActiveTab(index);
  };

  const sheetContent = () => {
    switch (activeTab) {
      case 1:
        return <Stats stats={stats} />;
      case 2:
        return <Evolution {...pokeSpecies} />;
      case 3:
        return <Moves moves={moves} />;
      default:
        return <About {...pokemonInfo} />;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const modalTitle = () => {
    if (isSuccess) return 'Catch Pokemon Success!';
    else return 'Catch Pokemon Failed!';
  };

  const modalBody = () => {
    if (isSuccess) return 'Catch Pokemon Success!';
    else return 'The pokemon managed to escape.';
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
    <>
      <SheetModal
        show={showDetail}
        onClose={handleCloseSheet}
        onSnap={handleSnapSheet}
        snapPoints={[600, 400]}
        initialSnap={1}
        backdropColor={color?.name}
        customBackdrop={
          <PokeInfo>
            {image && (
              <PokeImage show={showImage}>
                <Image src={image} alt={name} width={220} height={220} />
              </PokeImage>
            )}

            <PokeHeaderWrapper>
              {pokeBall()}
              <SheetClose onClick={handleCloseSheet}>&times;</SheetClose>
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

            <PokeAction
              variant="catch"
              onClick={handleCatch}
              isLoading={loadingAction || undefined}
            >
              {pokeBall(true)}
            </PokeAction>
          </PokeInfo>
        }
        customHeader={
          <Tabs withBorder onChange={handleChangeTab}>
            <Tabs.Item title="About" />
            <Tabs.Item title="Base Stats" />
            <Tabs.Item title="Evolution" />
            <Tabs.Item title="Moves" />
          </Tabs>
        }
      >
        <PokeDetailWrapper>{loading ? skeletonDetails() : sheetContent()}</PokeDetailWrapper>
      </SheetModal>

      <Modal show={showModal} onClose={handleCloseModal} title={modalTitle()}>
        <Modal.Body>{modalBody()}</Modal.Body>
        <Modal.Footer>
          <Button size="md" color="primary">
            {isSuccess ? 'Save' : 'OK'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PokemonDetails;

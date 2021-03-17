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
import {
  countPokemon,
  releaseMyPokemon,
  saveMyPokemon,
  validatePokemonName,
} from '@utils/localStorage';
import Input from '@components/input';

const PokemonDetails: React.FC<IPokemonDetail> = ({ pokemon, showDetail, onClose, onRelease }) => {
  const [loadingAction, setLoadingAction] = useState<boolean>(false);
  const [loadingSpecies, setLoadingSpecies] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemonInfo, setPokemonInfo] = useState<IPokemon>(pokemon);
  const [showImage, setShowImage] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [modalType, setModalType] = useState<'failed' | 'success' | 'release'>();
  const [validName, setValidName] = useState<boolean>(true);
  const [pokeNickname, setPokeNickname] = useState<string>('');
  const { id, name, nickname, image, types, species, stats, moves, pokeSpecies } =
    pokemonInfo || {};
  const { color, genera } = pokeSpecies || {};
  const isOwned = Boolean(nickname);

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
  const catchedPokemon = countPokemon(name);

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
        setModalType('failed');
      } else {
        setModalType('success');
      }
      setShowModal(true);
      setLoadingAction(false);
    };

    setTimeout(catchPokemon, 2400);
  };

  const handleRelease = () => {
    setModalType('release');
    setShowModal(true);
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
    setValidName(true);
    setLoadingAction(false);
    setPokeNickname('');
  };

  const modalTitle = () => {
    switch (modalType) {
      case 'success':
        return 'Catch Pokémon Success!';
      case 'failed':
        return 'Catch Pokémon Failed!';
      default:
        return 'Release Pokémon';
    }
  };

  const modalBody = () => {
    switch (modalType) {
      case 'success': {
        const isValid = !isEmpty(pokeNickname) ? pokeNickname?.length > 0 && validName : true;
        const errorMessage = 'Nickname already in use!';
        return (
          <Input
            placeholder="Give a nickname..."
            onChange={handleChangeNickname}
            maxLength={20}
            value={pokeNickname}
            loading={loadingAction}
            disabled={loadingAction}
            invalid={!isValid}
            message={errorMessage}
          />
        );
      }
      case 'failed':
        return 'The Pokémon managed to escape.';
      default:
        return 'Are you sure to release this Pokémon?';
    }
  };

  const modalAction = () => {
    switch (modalType) {
      case 'success':
        return (
          <Button
            size="md"
            color="primary"
            onClick={handleSubmitPokemon}
            loading={loadingAction}
            disabled={pokeNickname.length <= 0}
          >
            Save
          </Button>
        );
      case 'failed':
        return (
          <Button size="md" color="primary" onClick={handleCloseModal}>
            OK
          </Button>
        );
      default:
        return (
          <>
            <Button size="md" color="danger" onClick={handleCloseModal}>
              No
            </Button>
            <Button size="md" color="primary" onClick={handleSubmitPokemon}>
              Yes
            </Button>
          </>
        );
    }
  };

  const handleChangeNickname = (value: string) => {
    setPokeNickname(value);
    setValidName(true);
  };

  const handleSubmitPokemon = () => {
    if (modalType === 'success') {
      setLoadingAction(true);
      const valid = validatePokemonName(pokeNickname);
      setValidName(valid);

      if (valid) {
        const savePokemon = () => {
          saveMyPokemon(pokemon, pokeNickname);
          setPokemonInfo({ ...pokemonInfo, nickname: pokeNickname });
          handleCloseModal();
        };

        setTimeout(savePokemon, 2400);
      } else {
        setLoadingAction(false);
      }
    } else {
      releaseMyPokemon(nickname);
      handleCloseModal();
      handleCloseSheet();
      onRelease();
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
              {pokeBall(catchedPokemon > 0, catchedPokemon)}
              <SheetClose onClick={handleCloseSheet}>&times;</SheetClose>
            </PokeHeaderWrapper>
            <PokeHeaderWrapper>
              <h2>{formatText(nickname || name)}</h2>
              <h3>{isOwned ? formatText(name) : getFormattedId(id)}</h3>
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
              variant={isOwned ? 'release' : 'catch'}
              onClick={isOwned ? handleRelease : handleCatch}
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
        <Modal.Footer>{modalAction()}</Modal.Footer>
      </Modal>
    </>
  );
};

export default PokemonDetails;

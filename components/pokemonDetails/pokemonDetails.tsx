import React, { useEffect, useState } from 'react';
import { IPokemon, IPokemonDetail, IPokeType } from '@interfaces/ipokemon';
import Tabs from '@components/tabs';
import About from '@components/about';
import Modal from '@components/modal';
import { PokeInfo, PokeTitle, PokeType, PokeAction } from '@styles/pokemon.styles';
import { language, pokeBall } from '@utils/constant';
import { formatText, getFormattedId } from '@utils/string';
import { isEmpty } from 'lodash';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '@utils/graphqlQuery';
import Image from 'next/image';
import { Grid } from '@styles/grid.styles';
import { Skeleton } from '@styles/skeleton.styles';

const PokemonDetails: React.FC<IPokemonDetail> = ({ pokemon, showDetail, onClose }) => {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemon>(pokemon);
  const { id, name, image, types, species, pokeSpecies } = pokemonInfo || {};
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
        const response = await fetch(species.url);
        const pokeSpecies = await response.json();
        setPokemonInfo({ ...pokemonInfo, pokeSpecies });
      };

      fetchSpecies();
    }
  }, [species]);

  const loading = loadingData || !pokeSpecies;
  const genus = genera?.find((gen) => gen.language.name === language)?.genus;

  const handleClose = () => {
    setPokemonInfo(undefined);
    onClose();
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
    <Modal
      show={showDetail}
      onClose={handleClose}
      title={pokeBall()}
      info={
        <PokeInfo>
          <PokeTitle>
            <h2>{formatText(name)}</h2>
            <h3>{getFormattedId(id)}</h3>
          </PokeTitle>
          <PokeTitle>
            <PokeType>
              {types?.map((type: IPokeType, index: number) => (
                <span key={index}>{formatText(type.type.name)}</span>
              ))}
            </PokeType>
            <b>{genus}</b>
          </PokeTitle>
        </PokeInfo>
      }
      color={color?.name}
      as="sheets"
    >
      {image && (
        <Modal.Image>
          <Image src={image} alt={name} width={220} height={220} />
        </Modal.Image>
      )}
      <Modal.Body maxHeight fullHeight>
        {loading ? (
          skeletonDetails()
        ) : (
          <Tabs maxHeight="49vh" withBorder>
            <Tabs.Item title="About">
              <About {...pokemonInfo} />
            </Tabs.Item>
            <Tabs.Item title="Base Stats">Base Stats</Tabs.Item>
            <Tabs.Item title="Evolution">Evolution</Tabs.Item>
            <Tabs.Item title="Moves">Moves</Tabs.Item>
          </Tabs>
        )}
      </Modal.Body>
      <PokeAction variant="catch">{pokeBall(true)}</PokeAction>
    </Modal>
  );
};

export default PokemonDetails;

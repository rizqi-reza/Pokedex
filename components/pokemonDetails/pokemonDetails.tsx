import React from 'react';
import { IPokemon } from '@interfaces/ipokemon';
import Tabs from '@components/tabs';
import About from '@components/about';

const PokemonDetails: React.FC<IPokemon> = ({
  id,
  name,
  image,
  height,
  weight,
  abilities,
  sprites,
  onClick,
}) => {
  return (
    <Tabs maxHeight="49vh" withBorder>
      <Tabs.Item title="About">
        <About height={height} weight={weight} abilities={abilities} sprites={sprites} />
      </Tabs.Item>
      <Tabs.Item title="Base Stats">Base Stats</Tabs.Item>
      <Tabs.Item title="Evolution">Evolution</Tabs.Item>
      <Tabs.Item title="Moves">Moves</Tabs.Item>
    </Tabs>
  );
};

export default PokemonDetails;

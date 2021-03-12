import React from 'react';
import { NextPage } from 'next';
import Layouts from '@components/layouts';
import PokemonList from '@components/pokemonList';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <Layouts title="Pokedex" noHeader={false}>
      <Head>
        <title>Pokedex by Rizqi Reza</title>
      </Head>

      <PokemonList owned={false} />
    </Layouts>
  );
};

export default HomePage;

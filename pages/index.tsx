import React from 'react';
import { NextPage } from 'next';
import Layouts from '@components/layouts';
import PokemonList from '@components/pokemonList';
import Head from 'next/head';
import Tabs from '@components/tabs';

const HomePage: NextPage = () => {
  return (
    <Layouts title="Pokedex" noHeader>
      <Head>
        <title>Pokedex by Rizqi Reza</title>
      </Head>

      <Tabs fixedHeader noPadding variant="badge">
        <Tabs.Item title="Pokedex">
          <PokemonList owned={false} />
        </Tabs.Item>
        <Tabs.Item title="My Pokemon">My Pokemon</Tabs.Item>
      </Tabs>
    </Layouts>
  );
};

export default HomePage;

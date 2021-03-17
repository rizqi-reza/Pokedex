import React from 'react';
import { NextPage } from 'next';
import Layouts from '@components/layouts';
import PokemonList from '@components/pokemonList';
import Head from 'next/head';
import Tabs from '@components/tabs';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokedéx by Rizqi Reza</title>
        <meta
          name="description"
          content="Pokédex web application containing list of pokémon, pokémon details including basic information, basic stats, evolution chain, and moves learned. You can caught a pokémon, give it a nickname, and see list of pokémon catched by you on my pokémon tabs, and you can release pokémon also. Let's explore and find pokémon together!"
        ></meta>
      </Head>
      <Layouts>
        <Tabs fixedHeader noPadding variant="badge">
          <Tabs.Item title="Pokédex">
            <PokemonList />
          </Tabs.Item>
          <Tabs.Item title="My Pokémon">
            <PokemonList owned />
          </Tabs.Item>
        </Tabs>
      </Layouts>
    </>
  );
};

export default HomePage;

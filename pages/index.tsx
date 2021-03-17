import React from 'react';
import { NextPage } from 'next';
import Layouts from '@components/layouts';
import PokemonList from '@components/pokemonList';
import Head from 'next/head';
import Tabs from '@components/tabs';
import { defaultPageTitle } from '@utils/constant';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title key="page-title">{defaultPageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

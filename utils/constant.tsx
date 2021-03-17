import React from 'react';
import Image from 'next/image';
import { PokeBall } from '@styles/pokemon.styles';

export const pokemonVersion = process.env.NEXT_PUBLIC_POKEMON_VERSION;
export const language = process.env.NEXT_PUBLIC_POKEMON_LANGUAGE;
export const pokeballImage = process.env.NEXT_PUBLIC_POKEBALL_IMAGE;
export const pokeBall = (
  isActive: boolean = false,
  count: number = 0,
  width: number = 30,
  height: number = 30,
) => (
  <PokeBall isActive={isActive} width={width} height={height}>
    <Image src={pokeballImage} alt="poke_ball" width={width} height={height} />
    {count > 0 && <span>x {count}</span>}
  </PokeBall>
);
export const pokeImageBaseUrl = process.env.NEXT_PUBLIC_POKE_IMAGE_BASE_URL;

export const defaultPageTitle = 'Pokedéx by Rizqi Reza';
export const defaultMetaDescription =
  'Pokédex web application containing list of pokémon, pokémon details including basic information, basic stats, evolution chain, and moves learned.';
export const defaultVariables = { limit: 10, offset: 0 };
export const maxStat = 180;
export const myPokemonStorage = 'MY_POKEMON_DATA';

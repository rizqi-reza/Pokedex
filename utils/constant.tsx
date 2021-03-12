import { PokeBall } from '@styles/pokemon.styles';
import React from 'react';

export const pokeballImage = process.env.NEXT_PUBLIC_POKEBALL_IMAGE;
export const pokeBall = (isActive: boolean = false, width: number = 30, height: number = 30) => (
  <PokeBall background={pokeballImage} isActive={isActive} width={width} height={height} />
);

export const defaultVariables = { limit: 10, offset: 0 };

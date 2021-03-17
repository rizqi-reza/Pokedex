import { IPokemon } from '@interfaces/ipokemon';
import { myPokemonStorage } from './constant';

const hasLocalStorage = typeof window !== 'undefined' && localStorage;

export const countPokemon = (pokeName: string) => {
  const myPokemon = getMyPokemon();
  return myPokemon
    ? myPokemon?.filter((pokemon: IPokemon) => pokemon.name === pokeName)?.length
    : 0;
};

export const getMyPokemon = () => {
  if (hasLocalStorage) {
    const pokeData = localStorage?.getItem(myPokemonStorage);
    return pokeData ? JSON.parse(pokeData) : null;
  }
  return null;
};

export const saveMyPokemon = (pokemon: IPokemon, nickname: string) => {
  const myPokemon = getMyPokemon();
  const pokemonData = { ...pokemon, nickname };
  const newPokeData = myPokemon
    ? JSON.stringify([...myPokemon, pokemonData])
    : JSON.stringify([pokemonData]);
  localStorage?.setItem(myPokemonStorage, newPokeData);
};

export const validatePokemonName = (nickname: string) => {
  const pokeData = getMyPokemon();
  if (pokeData) {
    const isExists = pokeData?.find((pokemon: IPokemon) => pokemon.nickname === nickname);
    return !isExists;
  } else {
    return true;
  }
};

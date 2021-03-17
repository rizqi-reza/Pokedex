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
  const myPokemon: IPokemon[] = getMyPokemon();
  const pokemonData = { ...pokemon, nickname: nickname.toLowerCase() };
  const newPokeData = myPokemon
    ? JSON.stringify([...myPokemon, pokemonData])
    : JSON.stringify([pokemonData]);
  localStorage?.setItem(myPokemonStorage, newPokeData);
};

export const releaseMyPokemon = (nickname: string) => {
  const myPokemon: IPokemon[] = getMyPokemon();
  const pokemonData = myPokemon?.filter(
    (pokemon: IPokemon) => pokemon.nickname.toLowerCase() !== nickname.toLowerCase(),
  );
  const newPokeData = JSON.stringify(pokemonData || []);
  localStorage?.setItem(myPokemonStorage, newPokeData);
};

export const validatePokemonName = (nickname: string) => {
  const myPokemon: IPokemon[] = getMyPokemon();
  if (myPokemon) {
    const isExists = myPokemon?.find(
      (pokemon: IPokemon) => pokemon.nickname?.toLowerCase() === nickname?.toLowerCase(),
    );
    return !isExists;
  } else {
    return true;
  }
};

import { IPokeFlavorTextEntries } from '@interfaces/ipokemon';
import { startCase, lowerCase } from 'lodash';
import { language, pokemonVersion } from './constant';

export const getFormattedId = (id: number) => {
  return id ? `#${id.toString().padStart(3, '0')}` : '';
};

export const formatText = (value: string) => {
  return startCase(lowerCase(value));
};

export const parseUrlParam = (url: string) => {
  const urls = url?.split('/');
  const params = urls ? urls[urls?.length - 2] : '';
  return params;
};

export const getDescription = (flavor_text_entries: IPokeFlavorTextEntries[]) => {
  return (
    flavor_text_entries?.find(
      (text) =>
        (text?.version?.name.includes(pokemonVersion) ||
          text?.version_group?.name.includes(pokemonVersion)) &&
        text?.language.name === language,
    )?.flavor_text || ''
  );
};

export const getMoveTypeColor = (move: string) => {
  switch (move) {
    case 'normal':
      return { backgroundColor: '#80cbc4', color: '#fff' };
    case 'fire':
      return { backgroundColor: '#ef5350', color: '#fff' };
    case 'water':
      return { backgroundColor: '#42a5f5', color: '#fff' };
    case 'ice':
      return { backgroundColor: '#1e88e5', color: '#fff' };
    case 'electric':
      return { backgroundColor: '#ffee58', color: '#000' };
    case 'grass':
      return { backgroundColor: '#9ccc65', color: '#fff' };
    case 'fighting':
      return { backgroundColor: '#8d6e63', color: '#fff' };
    case 'poison':
      return { backgroundColor: '#7e57c2', color: '#fff' };
    case 'ground':
      return { backgroundColor: '#c0ca33', color: '#000' };
    case 'flying':
      return { backgroundColor: '#81d4fa', color: '#000' };
    case 'psychic':
      return { backgroundColor: '#f06292', color: '#fff' };
    case 'bug':
      return { backgroundColor: '#7cb342', color: '#fff' };
    case 'rock':
      return { backgroundColor: '#a98274', color: '#fff' };
    case 'ghost':
      return { backgroundColor: '#0d47a1', color: '#fff' };
    case 'dragon':
      return { backgroundColor: '#b71c1c', color: '#fff' };
    case 'dark':
      return { backgroundColor: '#212121', color: '#fff' };
    case 'steel':
      return { backgroundColor: '#cfd8dc', color: '#000' };
    case 'fairy':
      return { backgroundColor: '#f8bbd0', color: '#000' };
    default:
      return { backgroundColor: '#9e9e9e', color: '#fff' };
  }
};

export const getMoveEffects = (effect: string, chance: number) => {
  return effect?.replace('$effect_chance', chance?.toString()) || '';
};

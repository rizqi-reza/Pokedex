import { ISpecies } from './ispecies';

export interface IPokeBase {
  url?: string;
  name?: string;
}

export interface IPokemon {
  id: number;
  name: string;
  image: string;
  types: IPokeType[];
  weight: number;
  height: number;
  abilities: IPokeAbilities[];
  base_experience: number;
  species: IPokeBase;
  pokeSpecies: ISpecies;
  sprites: IPokeSprites;
  color?: string;
  onClick?: (name: string) => void;
}

export interface IPokemonDetail {
  pokemon: IPokemon;
  showDetail: boolean;
  onClose: () => void;
}

export interface IPokeType {
  slot: number;
  type: {
    name: string;
  };
}

export interface IPokeAbilities {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

export interface IPokeSprites {
  back_default: string;
  front_default: string;
}

export interface IPokeBall {
  background?: string;
  width?: number;
  height?: number;
  isActive: boolean;
}

export interface IPokeAction {
  variant?: 'default' | 'catch' | 'release';
}

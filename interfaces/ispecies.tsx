import { IPokeBase } from './ipokemon';

export interface ISpecies {
  id: number;
  capture_rate: number;
  color: IPokeBase;
  egg_groups: IPokeBase;
  evolution_chain: IPokeBase;
  flavor_text_entries: IFlavorTextEntries[];
  genera: IGenera[];
  growth_rate: IPokeBase;
  habitat: IPokeBase;
  hatch_counter: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
}

export interface IGenera {
  genus: string;
  language: IPokeBase;
}

export interface IFlavorTextEntries {
  genuflavor_texts: string;
  language: IPokeBase;
  version: IPokeBase;
}

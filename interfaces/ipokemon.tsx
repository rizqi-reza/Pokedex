export interface IPokemon {
  id: number;
  name: string;
  image: string;
  types: IPokeType[];
  weight: number;
  height: number;
  color?: string;
  onClick: (name: string) => void;
}

export interface IPokeType {
  slot: number;
  type: {
    name: string;
  };
}

import { IPokeBase } from './ipokemon';

export interface IMoves {
  moves: { move: IPokeBase }[];
}

export interface IMove {
  moveName: string;
  openedMove?: number;
  onClick: (id: number) => void;
}

export interface IMoveStyle {
  backgroundColor?: string;
  color?: string;
  align?: 'left' | 'center' | 'right';
  show?: boolean;
}

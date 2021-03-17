import React, { useState } from 'react';
import { formatText, getDescription, getMoveEffects, getMoveTypeColor } from '@utils/string';
import { useQuery } from '@apollo/client';
import { GET_MOVE } from '@utils/graphqlQuery';
import { isEmpty } from 'lodash';
import { IPokeMove } from '@interfaces/ipokemon';
import { Skeleton } from '@styles/skeleton.styles';
import { MoveDetails, MoveItem, MoveType } from '@styles/moves.styles';
import { Grid } from '@styles/grid.styles';

interface IMove {
  moveName: string;
  openedMove: number;
  onClick: (id: number) => void;
}

const Move: React.FC<IMove> = ({ moveName, openedMove, onClick }) => {
  const [pokemonMove, setPokemonMove] = useState<IPokeMove>();
  const {
    id,
    type,
    power,
    accuracy,
    pp,
    damage_class,
    flavor_text_entries,
    effect_entries,
    effect_chance,
    target,
  } = pokemonMove || {};

  const { loading } = useQuery(GET_MOVE, {
    skip: !moveName || isEmpty(moveName),
    variables: { move: moveName },
    onCompleted: (data) => {
      const pokeMove: IPokeMove = data?.move?.response;
      setPokemonMove(pokeMove);
    },
    onError: (error) => alert(error),
  });

  const handleOpenMove = () => {
    onClick(id);
  };

  const description = getDescription(flavor_text_entries);
  const showDetail = Boolean(id === openedMove);

  return loading ? (
    <>
      <Skeleton marginTop={8} />
      <Skeleton marginTop={8} />
      <Skeleton marginTop={8} />
      <Skeleton marginTop={8} />
      <Skeleton marginTop={8} />
    </>
  ) : (
    <>
      <MoveItem onClick={handleOpenMove}>{formatText(moveName)}</MoveItem>
      <MoveType {...getMoveTypeColor(type?.name)}>{formatText(type?.name)}</MoveType>
      <MoveItem align="center">{power || '-'}</MoveItem>
      <MoveItem align="center">{accuracy || '-'}</MoveItem>
      <MoveItem align="center">{pp || '-'}</MoveItem>

      <MoveDetails show={showDetail}>
        <span>{description}</span>
        {effect_entries?.map((effect, index: number) => (
          <span key={index}>{getMoveEffects(effect.effect, effect_chance)}</span>
        ))}
        <Grid template={['auto', 'auto']}>
          <span>Category</span>
          <MoveType align="left" {...getMoveTypeColor(damage_class?.name)}>
            {formatText(damage_class?.name)}
          </MoveType>

          <span>Target</span>
          <span>{formatText(target?.name)}</span>
        </Grid>
      </MoveDetails>
    </>
  );
};
export default Move;

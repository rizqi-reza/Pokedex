import { IPokeBase, IPokeMove } from '@interfaces/ipokemon';
import React, { useState } from 'react';
import Move from '@components/moves/partial/move';
import { Grid } from '@styles/grid.styles';
import { MoveHeader } from '@styles/moves.styles';

const Moves: React.FC<{ moves: { move: IPokeBase }[] }> = ({ moves }) => {
  const [openedMove, setOpenedMove] = useState<number>();

  const handleOpenMove = (id: number) => {
    if (id !== openedMove) {
      setOpenedMove(id);
    } else setOpenedMove(undefined);
  };

  return (
    <>
      <h3>Moves</h3>
      <Grid template={'repeat(5, 1fr)'} rowGap={22}>
        <MoveHeader>Name</MoveHeader>
        <MoveHeader align="center">Type</MoveHeader>
        <MoveHeader align="center">Power</MoveHeader>
        <MoveHeader align="center">Acc.</MoveHeader>
        <MoveHeader align="center">PP</MoveHeader>
        {moves?.map((move, index: number) => (
          <Move
            key={index}
            moveName={move.move.name}
            openedMove={openedMove}
            onClick={handleOpenMove}
          />
        ))}
      </Grid>
    </>
  );
};
export default Moves;

import React, { useState } from 'react';
import { IPokemon } from '@interfaces/ipokemon';
import {
  Card,
  CardBackground,
  CardHeader,
  CardImage,
  CardSubBadge,
  CardBadge,
} from '@styles/card.styles';
import { usePalette } from 'react-palette';
import { pokeballImage } from '@utils/constant';
import { Skeleton } from '@styles/skeleton.styles';
import { formatText, getFormattedId } from '@utils/string';

const Pokemon: React.FC<IPokemon> = ({ id, name, image, onClick }) => {
  const { data: color, loading } = usePalette(image);

  const handleClickPokemon = () => {
    onClick && onClick(name);
  };

  return loading ? (
    <Skeleton marginTop={8} height={100} />
  ) : (
    <Card background={color.lightVibrant} onClick={handleClickPokemon} height={100}>
      <CardImage src={image} alt={name} />
      <CardHeader>
        <CardBadge>{formatText(name)}</CardBadge>
        <CardSubBadge>{getFormattedId(id)}</CardSubBadge>
      </CardHeader>

      <CardBackground src={pokeballImage} alt="card_background" />
    </Card>
  );
};

export default Pokemon;

import React from 'react';
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
import { pokeBall, pokeballImage } from '@utils/constant';
import { Skeleton } from '@styles/skeleton.styles';
import { formatText, getFormattedId } from '@utils/string';
import Image from 'next/image';
import { countPokemon } from '@utils/localStorage';

const Pokemon: React.FC<IPokemon> = ({ id, name, nickname, image, onClick }) => {
  const { data: color, loading } = usePalette(image);
  const catchedPokemon = countPokemon(name);

  const handleClickPokemon = () => {
    onClick && onClick(name);
  };

  return loading ? (
    <Skeleton marginTop={8} height={100} />
  ) : (
    <Card background={color.lightVibrant} onClick={handleClickPokemon} height={100}>
      <CardImage>
        {nickname ? (
          <CardBadge fontSize={10}>{formatText(name)}</CardBadge>
        ) : (
          pokeBall(catchedPokemon > 0, catchedPokemon, 25, 25)
        )}

        <Image src={image} alt={name} width={96} height={96} />
      </CardImage>
      <CardHeader>
        {nickname ? (
          <CardBadge>{formatText(nickname)}</CardBadge>
        ) : (
          <CardBadge>{formatText(name)}</CardBadge>
        )}
        {!nickname && <CardSubBadge>{getFormattedId(id)}</CardSubBadge>}
      </CardHeader>

      <CardBackground>
        <Image src={pokeballImage} alt="card_background" width={115} height={115} />
      </CardBackground>
    </Card>
  );
};

export default Pokemon;

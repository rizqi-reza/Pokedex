import React from 'react';
import { IPokemon } from '@interfaces/ipokemon';
import {
  Card,
  CardBackground,
  CardHeader,
  CardImage,
  CardSubTitle,
  CardTitle,
} from 'styles/card.styles';
import { usePalette } from 'react-palette';
import { capitalize } from 'lodash';
import { backgroundImage } from '@utils/constant';
import { Skeleton } from 'styles/skeleton.styles';

const Pokemon: React.FC<IPokemon> = ({ id, name, image }) => {
  const { data: color, loading } = usePalette(image);

  return loading ? (
    <Skeleton marginTop={8} height={100} />
  ) : (
    <Card background={color.lightVibrant}>
      <CardHeader>
        <CardTitle>{capitalize(name)}</CardTitle>
        <CardSubTitle>#{id}</CardSubTitle>
      </CardHeader>

      <CardImage src={image} alt={name} />
      <CardBackground src={backgroundImage} alt="card_background" />
    </Card>
  );
};

export default Pokemon;

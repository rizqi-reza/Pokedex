import { IPokeAbilities, IPokeAbout } from '@interfaces/ipokemon';
import { Card, CardHeader, CardBadge, CardSubBadge, CardBody } from '@styles/card.styles';
import { Grid } from '@styles/grid.styles';
import { PokeAbility, PokeSprites } from '@styles/pokemon.styles';
import { calculteDimension } from '@utils/number';
import { capitalize } from 'lodash';
import React, { useState } from 'react';
import Image from 'next/image';

const About: React.FC<IPokeAbout> = ({ height, weight, abilities, sprites }) => {
  return (
    <>
      <h3>Dimension</h3>
      <Grid>
        <Card>
          <CardHeader>Height</CardHeader>
          <CardBody>{calculteDimension(height)} m</CardBody>
        </Card>
        <Card>
          <CardHeader>Weight</CardHeader>
          <CardBody>{calculteDimension(weight)} kg</CardBody>
        </Card>
      </Grid>

      <h3>Ability</h3>
      <PokeAbility>
        {abilities?.map((ability: IPokeAbilities) => (
          <li>
            {capitalize(ability?.ability.name)} {ability?.is_hidden && '(Hidden Ability)'}
          </li>
        ))}
      </PokeAbility>

      {sprites && (
        <Grid>
          <PokeSprites>
            <Image src={sprites.front_default} alt="front_sprites" width={200} height={200} />
            Front
          </PokeSprites>
          <PokeSprites>
            <Image src={sprites.back_default} alt="back_sprites" width={200} height={200} />
            Back
          </PokeSprites>
        </Grid>
      )}
    </>
  );
};
export default About;

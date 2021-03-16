import { IPokeAbilities, IPokemon } from '@interfaces/ipokemon';
import { Card, CardHeader, CardBody } from '@styles/card.styles';
import { Grid } from '@styles/grid.styles';
import { PokeAbility, PokeSprites } from '@styles/pokemon.styles';
import { calculteDimension } from '@utils/number';
import React from 'react';
import Image from 'next/image';
import { formatText, getDescription } from '@utils/string';

const About: React.FC<IPokemon> = ({
  height,
  weight,
  base_experience,
  abilities,
  sprites,
  pokeSpecies,
}) => {
  const {
    base_happiness,
    flavor_text_entries,
    capture_rate,
    growth_rate,
    egg_groups,
    hatch_counter,
  } = pokeSpecies || {};
  const description = getDescription(flavor_text_entries);

  const groups = egg_groups?.map((egg) => formatText(egg.name))?.join(', ');

  return (
    <>
      <p style={{ textAlign: 'justify' }}>{description}</p>
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
        {abilities?.map((ability: IPokeAbilities, index: number) => (
          <li key={index}>
            {formatText(ability?.ability.name)} {ability?.is_hidden && '(Hidden Ability)'}
          </li>
        ))}
      </PokeAbility>

      <h3>Training</h3>
      <Grid>
        <span>Base Experience</span>
        <span>{base_experience}</span>

        <span>Base Happiness</span>
        <span>{base_happiness}</span>

        <span>Catch Rate</span>
        <span>{capture_rate}%</span>

        <span>Growth Rate</span>
        <span>{formatText(growth_rate?.name)}</span>
      </Grid>

      <h3>Breeding</h3>
      <Grid>
        <span>Egg Groups</span>
        <span>{groups}</span>

        <span>Egg Cycles</span>
        <span>{hatch_counter}</span>
      </Grid>

      {sprites && (
        <Grid style={{ margin: '16px 0' }}>
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

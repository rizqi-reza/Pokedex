import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Moves from '@components/moves/moves';
import { IMoves } from '@interfaces/imove';
import { GET_MOVE } from '@utils/graphqlQuery';

const move = 'fire-punch';
const mocks = [
  {
    request: {
      query: GET_MOVE,
      variables: { move },
    },
    result: {
      data: {
        move: {
          response: {
            id: 7,
            accuracy: 100,
            damage_class: {
              name: 'physical',
              url: 'https://pokeapi.co/api/v2/move-damage-class/2/',
            },
            effect_chance: 10,
            effect_entries: [
              {
                effect:
                  'Inflicts regular damage.  Has a $effect_chance% chance to burn the target.',
                language: {
                  name: 'en',
                  url: 'https://pokeapi.co/api/v2/language/9/',
                },
                short_effect: 'Has a $effect_chance% chance to burn the target.',
              },
            ],
            flavor_text_entries: [
              {
                flavor_text: 'A fiery punch that may burn\nthe foe.',
                language: {
                  name: 'en',
                  url: 'https://pokeapi.co/api/v2/language/9/',
                },
                version_group: {
                  name: 'ruby-sapphire',
                  url: 'https://pokeapi.co/api/v2/version-group/5/',
                },
              },
            ],
            power: 75,
            pp: 15,
            target: {
              name: 'selected-pokemon',
              url: 'https://pokeapi.co/api/v2/move-target/10/',
            },
            type: {
              name: 'fire',
              url: 'https://pokeapi.co/api/v2/type/10/',
            },
          },
        },
      },
    },
  },
];

describe('Moves Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IMoves = {
      moves: [
        { move: { name: 'mega-punch', url: 'https://pokeapi.co/api/v2/move/5/' } },
        { move: { name: 'fire-punch', url: 'https://pokeapi.co/api/v2/move/7/' } },
        { move: { name: 'thunder-punch', url: 'https://pokeapi.co/api/v2/move/9/' } },
        { move: { name: 'scratch', url: 'https://pokeapi.co/api/v2/move/10/' } },
      ],
    };
    const { container: container } = render(
      <MockedProvider mocks={mocks}>
        <Moves {...TEST_DATA} />
      </MockedProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

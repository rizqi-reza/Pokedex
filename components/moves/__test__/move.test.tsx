import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Move from '@components/moves/partial/move';
import { IMove } from '@interfaces/imove';
import { GET_MOVE } from '@utils/graphqlQuery';

const onClick = jest.fn();

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

describe('Move Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IMove = { moveName: move, openedMove: 1, onClick };
    const { container: container } = render(
      <MockedProvider mocks={mocks}>
        <Move {...TEST_DATA} />
      </MockedProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

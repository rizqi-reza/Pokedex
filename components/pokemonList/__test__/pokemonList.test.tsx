import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import PokemonList from '@components/pokemonList/pokemonList';
import { GET_MOVE } from '@utils/graphqlQuery';
import { defaultVariables } from '@utils/constant';

const mocks = [
  {
    request: {
      query: GET_MOVE,
      variables: defaultVariables,
    },
    result: {
      data: {
        pokemons: {
          count: 1118,
          nextOffset: 10,
          prevOffset: 0,
          params: {
            limit: 10,
            offset: 0,
          },
          status: true,
          message: '',
          results: [
            {
              id: 1,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
              name: 'bulbasaur',
            },
            {
              id: 2,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
              name: 'ivysaur',
            },
            {
              id: 3,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
              name: 'venusaur',
            },
            {
              id: 4,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
              name: 'charmander',
            },
            {
              id: 5,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
              name: 'charmeleon',
            },
            {
              id: 6,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
              name: 'charizard',
            },
            {
              id: 7,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
              name: 'squirtle',
            },
            {
              id: 8,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
              name: 'wartortle',
            },
            {
              id: 9,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
              name: 'blastoise',
            },
            {
              id: 10,
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
              name: 'caterpie',
            },
          ],
        },
      },
    },
  },
];

describe('Pokemon List Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA = { owned: false };
    const { container: container } = render(
      <MockedProvider mocks={mocks}>
        <PokemonList {...TEST_DATA} />
      </MockedProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

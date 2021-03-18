import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import PokemonDetails from '@components/pokemonDetails/pokemonDetails';
import { IPokemonDetail } from '@interfaces/ipokemon';
import { GET_POKEMON } from '@utils/graphqlQuery';

const onClose = jest.fn();
const onRelease = jest.fn();

const name = 'charizard';
const mocks = [
  {
    request: {
      query: GET_POKEMON,
      variables: { name },
    },
    result: {
      data: {
        pokemon: {
          status: true,
          message: '',
          weight: 905,
          height: 17,
          base_experience: 240,
          species: {
            url: 'https://pokeapi.co/api/v2/pokemon-species/6/',
            name: 'charizard',
          },
          types: [{ type: { name: 'fire' } }, { type: { name: 'flying' } }],
          moves: [
            {
              move: {
                name: 'mega-punch',
                url: 'https://pokeapi.co/api/v2/move/5/',
              },
            },
            {
              move: {
                name: 'fire-punch',
                url: 'https://pokeapi.co/api/v2/move/7/',
              },
            },
            {
              move: {
                name: 'thunder-punch',
                url: 'https://pokeapi.co/api/v2/move/9/',
              },
            },
            {
              move: {
                name: 'scratch',
                url: 'https://pokeapi.co/api/v2/move/10/',
              },
            },
            {
              move: {
                name: 'swords-dance',
                url: 'https://pokeapi.co/api/v2/move/14/',
              },
            },
            {
              move: {
                name: 'cut',
                url: 'https://pokeapi.co/api/v2/move/15/',
              },
            },
            {
              move: {
                name: 'wing-attack',
                url: 'https://pokeapi.co/api/v2/move/17/',
              },
            },
            {
              move: {
                name: 'fly',
                url: 'https://pokeapi.co/api/v2/move/19/',
              },
            },
            {
              move: {
                name: 'mega-kick',
                url: 'https://pokeapi.co/api/v2/move/25/',
              },
            },
            {
              move: {
                name: 'headbutt',
                url: 'https://pokeapi.co/api/v2/move/29/',
              },
            },
            {
              move: {
                name: 'body-slam',
                url: 'https://pokeapi.co/api/v2/move/34/',
              },
            },
            {
              move: {
                name: 'take-down',
                url: 'https://pokeapi.co/api/v2/move/36/',
              },
            },
            {
              move: {
                name: 'double-edge',
                url: 'https://pokeapi.co/api/v2/move/38/',
              },
            },
            {
              move: {
                name: 'leer',
                url: 'https://pokeapi.co/api/v2/move/43/',
              },
            },
            {
              move: {
                name: 'growl',
                url: 'https://pokeapi.co/api/v2/move/45/',
              },
            },
            {
              move: {
                name: 'roar',
                url: 'https://pokeapi.co/api/v2/move/46/',
              },
            },
            {
              move: {
                name: 'ember',
                url: 'https://pokeapi.co/api/v2/move/52/',
              },
            },
            {
              move: {
                name: 'flamethrower',
                url: 'https://pokeapi.co/api/v2/move/53/',
              },
            },
            {
              move: {
                name: 'hyper-beam',
                url: 'https://pokeapi.co/api/v2/move/63/',
              },
            },
            {
              move: {
                name: 'submission',
                url: 'https://pokeapi.co/api/v2/move/66/',
              },
            },
            {
              move: {
                name: 'counter',
                url: 'https://pokeapi.co/api/v2/move/68/',
              },
            },
            {
              move: {
                name: 'seismic-toss',
                url: 'https://pokeapi.co/api/v2/move/69/',
              },
            },
            {
              move: {
                name: 'strength',
                url: 'https://pokeapi.co/api/v2/move/70/',
              },
            },
            {
              move: {
                name: 'solar-beam',
                url: 'https://pokeapi.co/api/v2/move/76/',
              },
            },
            {
              move: {
                name: 'dragon-rage',
                url: 'https://pokeapi.co/api/v2/move/82/',
              },
            },
            {
              move: {
                name: 'fire-spin',
                url: 'https://pokeapi.co/api/v2/move/83/',
              },
            },
            {
              move: {
                name: 'earthquake',
                url: 'https://pokeapi.co/api/v2/move/89/',
              },
            },
            {
              move: {
                name: 'fissure',
                url: 'https://pokeapi.co/api/v2/move/90/',
              },
            },
            {
              move: {
                name: 'dig',
                url: 'https://pokeapi.co/api/v2/move/91/',
              },
            },
            {
              move: {
                name: 'toxic',
                url: 'https://pokeapi.co/api/v2/move/92/',
              },
            },
            {
              move: {
                name: 'rage',
                url: 'https://pokeapi.co/api/v2/move/99/',
              },
            },
            {
              move: {
                name: 'mimic',
                url: 'https://pokeapi.co/api/v2/move/102/',
              },
            },
            {
              move: {
                name: 'double-team',
                url: 'https://pokeapi.co/api/v2/move/104/',
              },
            },
            {
              move: {
                name: 'smokescreen',
                url: 'https://pokeapi.co/api/v2/move/108/',
              },
            },
            {
              move: {
                name: 'defense-curl',
                url: 'https://pokeapi.co/api/v2/move/111/',
              },
            },
            {
              move: {
                name: 'reflect',
                url: 'https://pokeapi.co/api/v2/move/115/',
              },
            },
            {
              move: {
                name: 'bide',
                url: 'https://pokeapi.co/api/v2/move/117/',
              },
            },
            {
              move: {
                name: 'fire-blast',
                url: 'https://pokeapi.co/api/v2/move/126/',
              },
            },
            {
              move: {
                name: 'swift',
                url: 'https://pokeapi.co/api/v2/move/129/',
              },
            },
            {
              move: {
                name: 'skull-bash',
                url: 'https://pokeapi.co/api/v2/move/130/',
              },
            },
            {
              move: {
                name: 'rest',
                url: 'https://pokeapi.co/api/v2/move/156/',
              },
            },
            {
              move: {
                name: 'rock-slide',
                url: 'https://pokeapi.co/api/v2/move/157/',
              },
            },
            {
              move: {
                name: 'slash',
                url: 'https://pokeapi.co/api/v2/move/163/',
              },
            },
            {
              move: {
                name: 'substitute',
                url: 'https://pokeapi.co/api/v2/move/164/',
              },
            },
            {
              move: {
                name: 'snore',
                url: 'https://pokeapi.co/api/v2/move/173/',
              },
            },
            {
              move: {
                name: 'curse',
                url: 'https://pokeapi.co/api/v2/move/174/',
              },
            },
            {
              move: {
                name: 'protect',
                url: 'https://pokeapi.co/api/v2/move/182/',
              },
            },
            {
              move: {
                name: 'scary-face',
                url: 'https://pokeapi.co/api/v2/move/184/',
              },
            },
            {
              move: {
                name: 'mud-slap',
                url: 'https://pokeapi.co/api/v2/move/189/',
              },
            },
            {
              move: {
                name: 'outrage',
                url: 'https://pokeapi.co/api/v2/move/200/',
              },
            },
            {
              move: {
                name: 'sandstorm',
                url: 'https://pokeapi.co/api/v2/move/201/',
              },
            },
            {
              move: {
                name: 'endure',
                url: 'https://pokeapi.co/api/v2/move/203/',
              },
            },
            {
              move: {
                name: 'swagger',
                url: 'https://pokeapi.co/api/v2/move/207/',
              },
            },
            {
              move: {
                name: 'fury-cutter',
                url: 'https://pokeapi.co/api/v2/move/210/',
              },
            },
            {
              move: {
                name: 'steel-wing',
                url: 'https://pokeapi.co/api/v2/move/211/',
              },
            },
            {
              move: {
                name: 'attract',
                url: 'https://pokeapi.co/api/v2/move/213/',
              },
            },
            {
              move: {
                name: 'sleep-talk',
                url: 'https://pokeapi.co/api/v2/move/214/',
              },
            },
            {
              move: {
                name: 'return',
                url: 'https://pokeapi.co/api/v2/move/216/',
              },
            },
            {
              move: {
                name: 'frustration',
                url: 'https://pokeapi.co/api/v2/move/218/',
              },
            },
            {
              move: {
                name: 'dynamic-punch',
                url: 'https://pokeapi.co/api/v2/move/223/',
              },
            },
            {
              move: {
                name: 'dragon-breath',
                url: 'https://pokeapi.co/api/v2/move/225/',
              },
            },
            {
              move: {
                name: 'iron-tail',
                url: 'https://pokeapi.co/api/v2/move/231/',
              },
            },
            {
              move: {
                name: 'metal-claw',
                url: 'https://pokeapi.co/api/v2/move/232/',
              },
            },
            {
              move: {
                name: 'hidden-power',
                url: 'https://pokeapi.co/api/v2/move/237/',
              },
            },
            {
              move: {
                name: 'twister',
                url: 'https://pokeapi.co/api/v2/move/239/',
              },
            },
            {
              move: {
                name: 'sunny-day',
                url: 'https://pokeapi.co/api/v2/move/241/',
              },
            },
            {
              move: {
                name: 'rock-smash',
                url: 'https://pokeapi.co/api/v2/move/249/',
              },
            },
            {
              move: {
                name: 'heat-wave',
                url: 'https://pokeapi.co/api/v2/move/257/',
              },
            },
            {
              move: {
                name: 'will-o-wisp',
                url: 'https://pokeapi.co/api/v2/move/261/',
              },
            },
            {
              move: {
                name: 'facade',
                url: 'https://pokeapi.co/api/v2/move/263/',
              },
            },
            {
              move: {
                name: 'focus-punch',
                url: 'https://pokeapi.co/api/v2/move/264/',
              },
            },
            {
              move: {
                name: 'brick-break',
                url: 'https://pokeapi.co/api/v2/move/280/',
              },
            },
            {
              move: {
                name: 'secret-power',
                url: 'https://pokeapi.co/api/v2/move/290/',
              },
            },
            {
              move: {
                name: 'blast-burn',
                url: 'https://pokeapi.co/api/v2/move/307/',
              },
            },
            {
              move: {
                name: 'air-cutter',
                url: 'https://pokeapi.co/api/v2/move/314/',
              },
            },
            {
              move: {
                name: 'overheat',
                url: 'https://pokeapi.co/api/v2/move/315/',
              },
            },
            {
              move: {
                name: 'rock-tomb',
                url: 'https://pokeapi.co/api/v2/move/317/',
              },
            },
            {
              move: {
                name: 'aerial-ace',
                url: 'https://pokeapi.co/api/v2/move/332/',
              },
            },
            {
              move: {
                name: 'dragon-claw',
                url: 'https://pokeapi.co/api/v2/move/337/',
              },
            },
            {
              move: {
                name: 'roost',
                url: 'https://pokeapi.co/api/v2/move/355/',
              },
            },
            {
              move: {
                name: 'natural-gift',
                url: 'https://pokeapi.co/api/v2/move/363/',
              },
            },
            {
              move: {
                name: 'tailwind',
                url: 'https://pokeapi.co/api/v2/move/366/',
              },
            },
            {
              move: {
                name: 'fling',
                url: 'https://pokeapi.co/api/v2/move/374/',
              },
            },
            {
              move: {
                name: 'flare-blitz',
                url: 'https://pokeapi.co/api/v2/move/394/',
              },
            },
            {
              move: {
                name: 'air-slash',
                url: 'https://pokeapi.co/api/v2/move/403/',
              },
            },
            {
              move: {
                name: 'dragon-pulse',
                url: 'https://pokeapi.co/api/v2/move/406/',
              },
            },
            {
              move: {
                name: 'focus-blast',
                url: 'https://pokeapi.co/api/v2/move/411/',
              },
            },
            {
              move: {
                name: 'giga-impact',
                url: 'https://pokeapi.co/api/v2/move/416/',
              },
            },
            {
              move: {
                name: 'shadow-claw',
                url: 'https://pokeapi.co/api/v2/move/421/',
              },
            },
            {
              move: {
                name: 'fire-fang',
                url: 'https://pokeapi.co/api/v2/move/424/',
              },
            },
            {
              move: {
                name: 'defog',
                url: 'https://pokeapi.co/api/v2/move/432/',
              },
            },
            {
              move: {
                name: 'captivate',
                url: 'https://pokeapi.co/api/v2/move/445/',
              },
            },
            {
              move: {
                name: 'ominous-wind',
                url: 'https://pokeapi.co/api/v2/move/466/',
              },
            },
            {
              move: {
                name: 'hone-claws',
                url: 'https://pokeapi.co/api/v2/move/468/',
              },
            },
            {
              move: {
                name: 'flame-burst',
                url: 'https://pokeapi.co/api/v2/move/481/',
              },
            },
            {
              move: {
                name: 'flame-charge',
                url: 'https://pokeapi.co/api/v2/move/488/',
              },
            },
            {
              move: {
                name: 'round',
                url: 'https://pokeapi.co/api/v2/move/496/',
              },
            },
            {
              move: {
                name: 'echoed-voice',
                url: 'https://pokeapi.co/api/v2/move/497/',
              },
            },
            {
              move: {
                name: 'sky-drop',
                url: 'https://pokeapi.co/api/v2/move/507/',
              },
            },
            {
              move: {
                name: 'incinerate',
                url: 'https://pokeapi.co/api/v2/move/510/',
              },
            },
            {
              move: {
                name: 'inferno',
                url: 'https://pokeapi.co/api/v2/move/517/',
              },
            },
            {
              move: {
                name: 'fire-pledge',
                url: 'https://pokeapi.co/api/v2/move/519/',
              },
            },
            {
              move: {
                name: 'bulldoze',
                url: 'https://pokeapi.co/api/v2/move/523/',
              },
            },
            {
              move: {
                name: 'dragon-tail',
                url: 'https://pokeapi.co/api/v2/move/525/',
              },
            },
            {
              move: {
                name: 'work-up',
                url: 'https://pokeapi.co/api/v2/move/526/',
              },
            },
            {
              move: {
                name: 'confide',
                url: 'https://pokeapi.co/api/v2/move/590/',
              },
            },
            {
              move: {
                name: 'power-up-punch',
                url: 'https://pokeapi.co/api/v2/move/612/',
              },
            },
            {
              move: {
                name: 'brutal-swing',
                url: 'https://pokeapi.co/api/v2/move/693/',
              },
            },
          ],
          abilities: [
            { ability: { name: 'blaze' }, is_hidden: false },
            { ability: { name: 'solar-power' }, is_hidden: true },
          ],
          sprites: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
          },
          stats: [
            {
              base_stat: 78,
              effort: 0,
              stat: {
                name: 'hp',
              },
            },
            {
              base_stat: 84,
              effort: 0,
              stat: {
                name: 'attack',
              },
            },
            {
              base_stat: 78,
              effort: 0,
              stat: {
                name: 'defense',
              },
            },
            {
              base_stat: 109,
              effort: 3,
              stat: {
                name: 'special-attack',
              },
            },
            {
              base_stat: 85,
              effort: 0,
              stat: {
                name: 'special-defense',
              },
            },
            {
              base_stat: 100,
              effort: 0,
              stat: {
                name: 'speed',
              },
            },
          ],
        },
      },
    },
  },
];

describe('Pokemon Details Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IPokemonDetail = {
      pokemon: {
        id: 6,
        name,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      },
      showDetail: true,
      onClose,
      onRelease,
    };
    const { container: container } = render(
      <MockedProvider mocks={mocks}>
        <PokemonDetails {...TEST_DATA} />
      </MockedProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

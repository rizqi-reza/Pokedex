import { render } from '@testing-library/react';
import Pokemon from '@components/pokemon/pokemon';
import { IPokemon } from '@interfaces/ipokemon';

describe('Pokemon Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IPokemon = {
      id: 6,
      name: 'charizard',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    };
    const { container: container } = render(<Pokemon {...TEST_DATA} />);
    expect(container).toMatchSnapshot();
  });
});

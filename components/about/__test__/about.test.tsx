import { render } from '@testing-library/react';
import About from '@components/about/about';
import { IPokemon } from '@interfaces/ipokemon';

describe('About Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IPokemon = {
      id: 6,
      name: 'charizard',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    };
    const { container: container } = render(<About {...TEST_DATA} />);
    expect(container).toMatchSnapshot();
  });
});

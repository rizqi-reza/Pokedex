import { render } from '@testing-library/react';
import Stats from '@components/stats/stats';
import { IStats } from '@interfaces/istats';

describe('Stats Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IStats = {
      stats: [
        { base_stat: 58, effort: 0, stat: { name: 'hp' } },
        {
          base_stat: 64,
          effort: 0,
          stat: { name: 'attack' },
        },
        {
          base_stat: 58,
          effort: 0,
          stat: { name: 'defense' },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: { name: 'special-attack' },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: { name: 'special-defense' },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: { name: 'speed' },
        },
      ],
    };
    const { container: container } = render(<Stats {...TEST_DATA} />);
    expect(container).toMatchSnapshot();
  });
});

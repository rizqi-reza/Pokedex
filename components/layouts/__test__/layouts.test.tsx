import { render } from '@testing-library/react';
import Layouts from '@components/layouts/layouts';

describe('Layouts Component', () => {
  it(`Renders properly with default configuration`, () => {
    const { container: container } = render(<Layouts>Test</Layouts>);
    expect(container).toMatchSnapshot();
  });
});

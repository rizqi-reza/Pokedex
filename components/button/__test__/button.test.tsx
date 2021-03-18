import Button from '@components/button/button';
import { IButton } from '@interfaces/ibutton';
import { render } from '@testing-library/react';

const onClick = jest.fn();

describe('Button Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IButton = {};
    const { container: container } = render(<Button {...TEST_DATA} />);

    expect(container).toMatchSnapshot();
  });

  it(`Renders properly with customization`, () => {
    const TEST_DATA_1: IButton = {
      color: 'danger',
      size: 'sm',
      onClick,
    };
    const TEST_DATA_2: IButton = {
      color: 'danger',
      size: 'lg',
      block: true,
      onClick,
    };
    const TEST_DATA_3: IButton = {
      color: 'primary',
      size: 'md',
      disabled: true,
      loading: true,
      onClick,
    };

    const { container: container1 } = render(<Button {...TEST_DATA_1} />);
    const { container: container2 } = render(<Button {...TEST_DATA_2} />);
    const { container: container3 } = render(<Button {...TEST_DATA_3} />);

    expect(container1).toMatchSnapshot();
    expect(container2).toMatchSnapshot();
    expect(container3).toMatchSnapshot();
  });
});

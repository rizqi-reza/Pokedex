import { IInput } from '@interfaces/iinput';
import { render } from '@testing-library/react';
import Input from '@components/input/input';

const onChange = jest.fn();
const onBlur = jest.fn();

describe('Input Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IInput = {};
    const { container: container } = render(<Input {...TEST_DATA} />);
    expect(container).toMatchSnapshot();
  });

  it(`Renders properly with customization`, () => {
    const TEST_DATA_1: IInput = {
      invalid: true,
      message: 'message',
      size: 'sm',
      onChange,
    };
    const TEST_DATA_2: IInput = {
      size: 'lg',
      disabled: true,
      onBlur,
    };
    const TEST_DATA_3: IInput = {
      size: 'md',
      loading: true,
      onChange,
      onBlur,
    };

    const { container: container1 } = render(<Input {...TEST_DATA_1} />);
    const { container: container2 } = render(<Input {...TEST_DATA_2} />);
    const { container: container3 } = render(<Input {...TEST_DATA_3} />);

    expect(container1).toMatchSnapshot();
    expect(container2).toMatchSnapshot();
    expect(container3).toMatchSnapshot();
  });
});

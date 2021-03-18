import { IModal } from '@interfaces/imodal';
import { render } from '@testing-library/react';
import Modal from '@components/modal/modal';

const onClose = jest.fn();

describe('Modal Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IModal = { show: true, onClose };
    const { container: container } = render(<Modal {...TEST_DATA} />);
    expect(container).toMatchSnapshot();
  });

  it(`Renders properly with customization`, () => {
    const TEST_DATA_1: IModal = {
      show: true,
      title: 'Test Modal 1',
      onClose,
    };
    const TEST_DATA_2: IModal = {
      show: true,
      title: 'Test Modal 2',
      onClose,
    };

    const { container: container1 } = render(<Modal {...TEST_DATA_1} />);
    const { container: container2 } = render(<Modal {...TEST_DATA_2} />);

    expect(container1).toMatchSnapshot();
    expect(container2).toMatchSnapshot();
  });
});

import SheetModal from '@components/sheet/sheet';
import { ISheet } from '@interfaces/isheet';
import { render } from '@testing-library/react';

const onClose = jest.fn();
const onSnap = jest.fn();

describe('Sheet Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: ISheet = {
      show: true,
      snapPoints: [500],
    };
    const { container: container } = render(<SheetModal {...TEST_DATA} />);

    expect(container).toMatchSnapshot();
  });

  it(`Renders properly with customization`, () => {
    const TEST_DATA_1: ISheet = {
      show: true,
      snapPoints: [500],
      initialSnap: 0,
      onClose,
      onSnap,
    };
    const TEST_DATA_2: ISheet = {
      show: true,
      snapPoints: [500],
      backdropColor: '#000',
      onClose,
      onSnap,
    };
    const TEST_DATA_3: ISheet = {
      show: true,
      snapPoints: [500],
      customBackdrop: 'Test custom backdrop',
      onClose,
      onSnap,
    };
    const TEST_DATA_4: ISheet = {
      show: true,
      snapPoints: [500],
      customHeader: 'Test custom header',
      onClose,
      onSnap,
    };

    const { container: container1 } = render(<SheetModal {...TEST_DATA_1} />);
    const { container: container2 } = render(<SheetModal {...TEST_DATA_2} />);
    const { container: container3 } = render(<SheetModal {...TEST_DATA_3} />);
    const { container: container4 } = render(<SheetModal {...TEST_DATA_4} />);

    expect(container1).toMatchSnapshot();
    expect(container2).toMatchSnapshot();
    expect(container3).toMatchSnapshot();
    expect(container4).toMatchSnapshot();
  });
});

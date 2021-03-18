import { render } from '@testing-library/react';
import ProgressBar from '@components/progressBar/progressBar';
import { IProgressBar } from '@interfaces/iprogressbar';

describe('Progress Bar Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: IProgressBar = { value: 50, maxValue: 100 };
    const { container: container } = render(<ProgressBar {...TEST_DATA} />);
    expect(container).toMatchSnapshot();
  });
});

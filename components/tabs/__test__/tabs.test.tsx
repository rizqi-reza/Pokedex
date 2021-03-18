import { render } from '@testing-library/react';
import Tabs from '@components/tabs/tabs';
import { ITabs } from '@interfaces/itabs';

const onChange = jest.fn();

describe('Tabs Component', () => {
  it(`Renders properly with default configuration`, () => {
    const TEST_DATA: ITabs = {};
    const { container: container } = render(
      <Tabs {...TEST_DATA}>
        <Tabs.Item title="1" />
        <Tabs.Item title="2" />
      </Tabs>,
    );
    expect(container).toMatchSnapshot();
  });

  it(`Renders properly with customization`, () => {
    const TEST_DATA_1: ITabs = {
      withBorder: true,
      fixedHeader: true,
      onChange,
    };
    const TEST_DATA_2: ITabs = {
      defaultActive: 1,
      noPadding: true,
      onChange,
    };
    const TEST_DATA_3: ITabs = {
      variant: 'badge',
      withBorder: true,
      onChange,
    };

    const { container: container1 } = render(
      <Tabs {...TEST_DATA_1}>
        <Tabs.Item title="1" />
        <Tabs.Item title="2" />
      </Tabs>,
    );
    const { container: container2 } = render(
      <Tabs {...TEST_DATA_2}>
        <Tabs.Item title="1" />
        <Tabs.Item title="2" />
      </Tabs>,
    );
    const { container: container3 } = render(
      <Tabs {...TEST_DATA_3}>
        <Tabs.Item title="1" />
        <Tabs.Item title="2" />
      </Tabs>,
    );

    expect(container1).toMatchSnapshot();
    expect(container2).toMatchSnapshot();
    expect(container3).toMatchSnapshot();
  });
});

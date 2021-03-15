import { ISubTabs, ITabs } from '@interfaces/itabs';
import {
  TabsItemStyled,
  TabsStyled,
  TabsList,
  TitleWrapper,
  Title,
  Bar,
  Content,
} from '@styles/tabs.styles';
import React, { useState } from 'react';

const TabsItem: React.FC = ({ children }) => {
  return <TabsItemStyled>{children}</TabsItemStyled>;
};

const Tabs: React.FC<ITabs> & ISubTabs = ({
  defaultActive = 0,
  withBorder,
  maxHeight,
  fixedHeader,
  noPadding,
  variant,
  onChange,
  children,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<number>(defaultActive || 0);

  const handleChange = (index: number) => {
    setSelectedStatus(index);
    onChange && onChange(index);
  };

  const contentTab: any = children;

  const contentRender = () => {
    if (contentTab[selectedStatus]) {
      return React.cloneElement(contentTab[selectedStatus]);
    }
    return children;
  };

  return (
    <TabsStyled>
      <TabsList fixedHeader={fixedHeader} variant={variant}>
        {React.Children.map(children, (item: any, index) => {
          return (
            <TitleWrapper key={index} onClick={() => handleChange(index)}>
              <Title selected={index == selectedStatus} variant={variant}>
                {item.props.title}
              </Title>
              {variant === 'default' && <Bar selected={index == selectedStatus} />}
            </TitleWrapper>
          );
        })}
      </TabsList>
      <Content withBorder={withBorder} maxHeight={maxHeight} noPadding={noPadding}>
        {contentRender()}
      </Content>
    </TabsStyled>
  );
};

Tabs.displayName = 'Tabs';
TabsItem.displayName = 'Tabs.Item';

export default Tabs;
Tabs.Item = TabsItem;

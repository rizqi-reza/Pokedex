import React from 'react';
import { ILayouts } from '@interfaces/ilayouts';
import {
  LayoutStyle,
  Wrapper,
  Header,
  MainContent,
  Footer,
  BackgroundContent,
} from '@components/layouts/layouts.styles';
import { backgroundImage } from '@utils/constant';

const Layouts: React.FC<ILayouts> = ({ title, noHeader, menuSelected, children }) => {
  return (
    <LayoutStyle>
      <Header show={!noHeader}>
        <Wrapper>{title}</Wrapper>
      </Header>
      <MainContent noHeader={noHeader}>
        <BackgroundContent src={backgroundImage} alt="page_background" />
        {children}
      </MainContent>
      <Wrapper>
        <Footer>Made with love by @rizqirezz</Footer>
      </Wrapper>
    </LayoutStyle>
  );
};

export default Layouts;

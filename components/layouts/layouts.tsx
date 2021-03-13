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
import { pokeballImage } from '@utils/constant';

const Layouts: React.FC<ILayouts> = ({ title, noHeader, children }) => {
  return (
    <LayoutStyle>
      <Header show={!noHeader}>
        <Wrapper>{title}</Wrapper>
      </Header>
      <MainContent noHeader={noHeader}>
        <BackgroundContent src={pokeballImage} alt="page_background" />
        {children}
      </MainContent>
      <Wrapper>
        <Footer>Made with love by @rizqirezz</Footer>
      </Wrapper>
    </LayoutStyle>
  );
};

export default Layouts;

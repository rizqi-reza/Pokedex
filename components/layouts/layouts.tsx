import React from 'react';
import {
  LayoutStyle,
  Wrapper,
  MainContent,
  Footer,
  BackgroundContent,
} from '@components/layouts/layouts.styles';
import { pokeballImage } from '@utils/constant';

const Layouts: React.FC = ({ children }) => {
  return (
    <LayoutStyle>
      <MainContent>
        <BackgroundContent src={pokeballImage} alt="page_background" />
        {children}
      </MainContent>
      <Wrapper>
        <Footer>Made with &#9829; by: @rizqirezz</Footer>
      </Wrapper>
    </LayoutStyle>
  );
};

export default Layouts;

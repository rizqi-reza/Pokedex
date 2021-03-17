import React from 'react';
import {
  LayoutStyle,
  Wrapper,
  MainContent,
  Footer,
  BackgroundContent,
} from '@styles/layouts.styles';
import { pokeballImage } from '@utils/constant';
import Image from 'next/image';

const Layouts: React.FC = ({ children }) => {
  return (
    <LayoutStyle>
      <MainContent>
        <BackgroundContent>
          <Image src={pokeballImage} alt="page_background" width={350} height={350} />
        </BackgroundContent>
        {children}
      </MainContent>
      <Wrapper>
        <Footer>Made with &#9829; by: @rizqirezz</Footer>
      </Wrapper>
    </LayoutStyle>
  );
};

export default Layouts;

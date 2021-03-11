import styled from '@emotion/styled';
import { IContent } from '@interfaces/icontent';
import { IHeader } from '@interfaces/iheader';

export const LayoutStyle = styled.div(() => ({
  padding: 0,
  margin: 0,
  fontFamily: 'Open Sans,sans-serif',
  backgroundColor: '#f7f7f7',
}));

export const Wrapper = styled.div(() => ({
  maxWidth: 480,
  margin: '0px auto',
}));

export const Header = styled.div<IHeader>(({ show }) => ({
  color: '#fff',
  display: show ? 'block' : 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#03ac0e',
  padding: '0 8px 0 8px',
  boxShadow: '0 4px 16px 0 rgba(0,0,0,0.1)',
  zIndex: 999,
  div: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export const MainContent = styled.main<IContent>(({ noHeader }) => ({
  color: '#000',
  margin: noHeader ? '0px auto' : '60px auto 0px',
  width: '100%',
  maxWidth: 480,
  backgroundColor: '#fff',
  padding: 16,
  boxSizing: 'border-box',
  minHeight: 'calc(100vh - 60px)',
}));

export const BackgroundContent = styled.img(() => ({
  position: 'fixed',
  maxWidth: 350,
  right: -80,
  top: -30,
  opacity: 0.1,
  transform: 'rotate(-10deg)',
}));

export const Footer = styled.div(() => ({
  color: '#989898',
  backgroundColor: '#fff',
  padding: '1.5em',
  fontSize: 12,
  textAlign: 'center',
}));

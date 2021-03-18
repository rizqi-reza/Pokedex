import styled from '@emotion/styled';

export const LayoutStyle = styled.div({
  padding: 0,
  margin: 0,
  fontFamily: 'Open Sans,sans-serif',
  backgroundColor: '#f7f7f7',
});

export const Wrapper = styled.div({
  maxWidth: 480,
  margin: '0px auto',
});

export const MainContent = styled.main({
  color: '#000',
  margin: '0px auto',
  width: '100%',
  maxWidth: 480,
  backgroundColor: '#fff',
  padding: 8,
  boxSizing: 'border-box',
  minHeight: 'calc(100vh - 60px)',
});

export const BackgroundContent = styled.div({
  position: 'fixed',
  maxWidth: 350,
  right: -80,
  top: -30,
  opacity: 0.1,
  transform: 'rotate(-10deg)',
});

export const Footer = styled.div({
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  color: '#757575',
  backgroundColor: '#fff',
  padding: '1.5em 0',
  fontSize: 12,
  textAlign: 'center',
  zIndex: 99,
});

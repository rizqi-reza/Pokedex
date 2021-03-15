import styled from '@emotion/styled';
import { IModalBody, IModalHeader, IModalWrapper } from '@interfaces/imodal';

export const Mask = styled.div<IModalWrapper>(({ show, backgroundColor }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: backgroundColor
    ? backgroundColor === 'white'
      ? 'aqua'
      : backgroundColor
    : 'rgba(255,255,255,0.5)',
  visibility: show ? 'visible' : 'hidden',
  transition: 'all 0.3s',
  zIndex: 999,
  div: {
    opacity: 0.2,
    float: 'right',
    transform: 'rotate(-10deg)',
    top: -30,
    right: -30,
  },
}));

export const ModalWrapper = styled.div<IModalWrapper>(({ show }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 9999,
  outline: 0,
  overflow: undefined,
  opacity: show ? 1 : 0,
  visibility: show ? 'visible' : 'hidden',
  transform: show ? 'translate(0)' : 'translateY(100%)',
  transition: 'all 0.6s',
  textAlign: 'center',
  '&:before': {
    display: 'inline-block',
    width: 0,
    height: '100%',
    verticalAlign: 'middle',
    content: '""',
  },
}));

export const ModalStyled = styled.div<IModalWrapper>(({ show }) => ({
  width: '100%',
  maxWidth: 480,
  height: 480,
  position: 'relative',
  margin: '32px auto 0',
  background: '#fff',
  flex: 1,
  display: 'inline-block',
  textAlign: 'left',
  verticalAlign: 'bottom',
  opacity: show ? 1 : 0,
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  boxShadow: '0 -2px 16px 0 rgba(0,0,0,0.1)',
  transition: 'transform 200ms ease-in-out 0s, opacity 200ms ease-in-out 0s',
}));

export const ModalHeader = styled.div<IModalHeader>(({ show, variant }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  alignItems: 'center',
  padding: 24,
  maxWidth: 480,
  margin: '0 auto 0',
  color: variant === 'light' ? '#fff' : '#000',
  visibility: show ? 'visible' : 'hidden',
  transition: 'all 0.3s',
  zIndex: 99999,
}));

export const ModalTitle = styled.div({
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
});

export const ModalInfo = styled.div({
  color: '#fff',
});

export const ModalClose = styled.div({
  cursor: 'pointer',
  fontSize: 24,
  fontWeight: 800,
  padding: '0 10px 4px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  textShadow: 'none',
  borderRadius: '50%',
});

export const Body = styled.div<IModalBody>(({ withOutFooter, maxHeight, fullHeight }) => ({
  padding: 12,
  paddingTop: 24,
  fontSize: 14,
  wordBreak: 'break-word',
  maxHeight:
    withOutFooter && !fullHeight
      ? 'calc(85vh - 61px - 32px)'
      : fullHeight
      ? 'calc(100vh - 61px - 32px)'
      : 'calc(85vh - 61px - 65px - 32px)',
  overflow: maxHeight ? 'auto' : undefined,
}));

export const Footer = styled.div({
  backgroundColor: '#fff',
  maxWidth: 480,
  margin: '0 auto 0',
  borderTop: `1px solid #e0e0e0`,
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: 16,
  display: 'flex',
  justifyContent: 'space-around',
});

export const ModalHeaderImage = styled.div({
  display: 'block',
  position: 'absolute',
  left: 0,
  right: 0,
  textAlign: 'center',
  top: '-34%',
  objectFit: 'cover',
});

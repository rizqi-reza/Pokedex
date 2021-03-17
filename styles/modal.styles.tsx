import styled from '@emotion/styled';
import { IModalBody, IModalHeader, IModalWrapper } from '@interfaces/imodal';

export const Mask = styled.div<IModalWrapper>(({ show, backgroundColor, zIndex }) => ({
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
  zIndex: zIndex ? zIndex : 999,
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
  zIndex: 99999999,
  outline: 0,
  overflow: 'auto',
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
  maxWidth: 300,
  position: 'relative',
  margin: '32px auto',
  background: '#fff',
  flex: 1,
  top: 0,
  display: 'inline-block',
  textAlign: 'left',
  verticalAlign: 'middle',
  opacity: show ? 1 : 0,
  borderRadius: 8,
  boxShadow: '0 -2px 16px 0 rgba(0,0,0,0.1)',
  transition: 'transform 200ms ease-in-out 0s, opacity 200ms ease-in-out 0s',
}));

export const ModalHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 16,
  paddingBottom: 0,
  borderBottom: `1px solid #e0e0e0`,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  zIndex: 9,
});

export const ModalTitle = styled.div({
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold',
});

export const ModalClose = styled.div({
  cursor: 'pointer',
  fontSize: 24,
  marginTop: -8,
});

export const Body = styled.div<IModalBody>(({ withOutFooter, maxHeight, fullHeight }) => ({
  padding: 16,
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
  padding: 16,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  borderRadius: 8,
  flex: '0 0 calc(50% - 4px)',
  '&:only-of-type': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },
  button: {
    '& + button': {
      marginLeft: 8,
    },
  },
});

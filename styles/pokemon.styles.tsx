import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { IPokeBall, IPokeAction } from '@interfaces/ipokemon';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const PokeBall = styled.span<IPokeBall>(({ width, height, isActive }) => ({
  display: 'inline-block',
  backgroundSize: 'cover',
  backgroundColor: '#fff',
  border: '2px solid #fff',
  borderRadius: '50%',
  width,
  height,
  img: {
    filter: isActive
      ? 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)'
      : 'invert(27%) sepia(51%) saturate(100%) hue-rotate(346deg) brightness(100%) contrast(45%)',
  },
  opacity: 0.8,
  span: {
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 8,
    width,
    filter: 'unset',
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    fontSize: 12,
    padding: '4px 8px',
    borderRadius: 16,
  },
}));

export const PokeWrapper = styled.div({
  marginTop: 60,
  h2: {
    marginBottom: 0,
  },
  p: {
    marginTop: 0,
    color: '#9e9e9e',
  },
});

export const PokeDetailWrapper = styled.div({
  padding: '0 16px',
  overflowY: 'scroll',
});

export const PokeInfo = styled.div({
  padding: 16,
  color: '#fff',
  height: '100%',
});

export const PokeImage = styled.div<{ show?: boolean }>(({ show = true }) => ({
  display: 'block',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 100,
  textAlign: 'center',
  objectFit: 'cover',
  opacity: show ? 1 : 0,
  transition: 'all 0.3s',
}));

export const PokeHeaderWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  textShadow: '0px 2px 16px rgba(0,0,0,0.4)',
});

export const PokeType = styled.span({
  maxWidth: 120,
  textShadow: 'none',
  span: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '4px 8px',
    borderRadius: 16,
    fontSize: 12,
    marginRight: 4,
  },
});

export const PokeAbility = styled.ul({
  paddingLeft: 16,
  li: {
    marginBottom: 8,
  },
});

export const PokeSprites = styled.div({
  textAlign: 'center',
  fontWeight: 600,
});

export const PokeEvoTrigger = styled.div({
  fontSize: 12,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  img: {
    width: 'min-content',
  },
});

export const PokeAction = styled.button<IPokeAction>(({ variant, isLoading }) => ({
  position: 'fixed',
  color: '#fff',
  backgroundColor: variant === 'default' ? '#2196f3' : variant === 'catch' ? '#ef5350' : '#9ccc65',
  backgroundImage: 'none',
  fontWeight: 'bold',
  padding: 8,
  fontSize: 14,
  height: 50,
  width: 50,
  bottom: 20,
  right: 20,
  cursor: 'pointer',
  borderRadius: '50%',
  outline: 'none',
  textDecoration: 'none',
  boxSizing: 'border-box',
  boxShadow: '0 4px 16px 0 rgba(0,0,0,0.3)',
  border: 'none',
  animation: isLoading ? `${spin} 1.4s ease infinite` : undefined,
  transition: 'all .3s cubic-bezier(0.645, 0.045, 0.355, 1)',
  zIndex: 9,
  ':hover': {
    boxShadow: 'none',
  },
}));

export const PokeEmpty = styled.div({
  textAlign: 'center',
  fontSize: 24,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  borderRadius: 8,
  padding: 8,
});

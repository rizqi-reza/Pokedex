import styled from '@emotion/styled';
import { IPokeBall, IPokeAction } from '@interfaces/ipokemon';

export const PokeBall = styled.span<IPokeBall>(({ background, width, height, isActive }) => ({
  display: 'inline-block',
  backgroundSize: 'cover',
  backgroundImage: `url(${background})`,
  backgroundColor: '#fff',
  border: '2px solid #fff',
  borderRadius: '50%',
  width,
  height,
  filter: isActive
    ? 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)'
    : 'invert(27%) sepia(51%) saturate(100%) hue-rotate(346deg) brightness(100%) contrast(45%)',
}));

export const PokeWrapper = styled.div({
  marginTop: 60,
});

export const PokeInfo = styled.div({
  width: '100%',
});

export const PokeTitle = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: -12,
});

export const PokeType = styled.span({
  maxWidth: 120,
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

export const PokeAction = styled.button<IPokeAction>(({ variant }) => ({
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
  transition: 'all .3s cubic-bezier(0.645, 0.045, 0.355, 1)',
  ':hover': {
    boxShadow: 'none',
  },
}));
import styled from '@emotion/styled';
import { IPokeBall } from '@interfaces/ipokeball';

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

export const PokeInfo = styled.div(() => ({
  width: '100%',
}));

export const PokeTitle = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: -12,
}));

export const PokeType = styled.span(() => ({
  maxWidth: 120,
  span: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '4px 8px',
    borderRadius: 16,
    fontSize: 12,
    marginRight: 4,
  },
}));

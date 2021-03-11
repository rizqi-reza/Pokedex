import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { ISkeleton } from '@interfaces/iskeleton';

const loader = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const Skeleton = styled.div<ISkeleton>(
  ({ width, height = 24, radius = 8, color = '#bdbdbd', marginTop, marginBottom }) => ({
    width: width ? width : 'auto',
    height,
    marginTop,
    marginBottom,
    background: `linear-gradient(90deg, ${color} 25%, #e0e0e0 37%, ${color} 63%)`,
    animation: `${loader} 1.4s ease infinite`,
    backgroundSize: '400% 100%',
    borderRadius: radius,
    padding: 8,
    color: '#fff',
    textAlign: 'center',
  }),
);

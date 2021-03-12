import styled from '@emotion/styled';

export const Grid = styled.div<{ width?: string[] }>(({ width = ['auto', 'auto'] }) => ({
  display: 'grid',
  gridTemplateColumns: `${width.join(' ')}`,
  gap: 12,
}));

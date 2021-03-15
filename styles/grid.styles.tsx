import styled from '@emotion/styled';

export const Grid = styled.div<{ width?: string[]; rowGap?: number }>(
  ({ width = ['auto', 'auto'], rowGap = 12 }) => ({
    display: 'grid',
    gridTemplateColumns: `${width.join(' ')}`,
    gap: 12,
    rowGap,
  }),
);

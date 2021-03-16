import styled from '@emotion/styled';

interface IGrid {
  template?: string | string[];
  rowGap?: number;
}

export const Grid = styled.div<IGrid>(({ template = ['auto', 'auto'], rowGap = 12 }) => ({
  display: 'grid',
  gridTemplateColumns: Array.isArray(template) ? `${template.join(' ')}` : template,
  gap: 12,
  alignItems: 'center',
  rowGap,
}));

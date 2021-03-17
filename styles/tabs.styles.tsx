import styled from '@emotion/styled';

interface ITabs {
  selected?: boolean;
  variant?: 'default' | 'badge';
  fixedHeader?: boolean;
}

export const TabsStyled = styled.div({
  position: 'relative',
  height: '100%',
});

export const TabsList = styled.div<ITabs>(({ variant, fixedHeader }) => ({
  position: fixedHeader ? 'fixed' : 'relative',
  top: fixedHeader ? 0 : undefined,
  left: fixedHeader ? 0 : undefined,
  right: fixedHeader ? 0 : undefined,
  backgroundColor: fixedHeader ? '#fff' : undefined,
  zIndex: 999,
  display: 'flex',
  justifyContent: variant === 'badge' ? 'center' : 'space-evenly',
  maxWidth: '100%',
  overflow: 'auto hidden',
  whiteSpace: 'nowrap',
  flexWrap: 'revert',
  '& > div:last-of-type': {
    marginRight: 0,
  },
}));

export const TitleWrapper = styled.div({
  marginRight: 8,
  position: 'relative',
});

export const Title = styled.div<ITabs>(({ selected, variant }) => ({
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: 12,
  padding: variant === 'badge' ? 8 : '16px 4px',
  margin: variant === 'badge' ? '16px 0' : 0,
  color: selected ? (variant === 'badge' ? '#fff' : '#1976d2') : '#000',
  backgroundColor: variant === 'badge' && selected ? '#1976d2' : undefined,
  boxShadow: variant === 'badge' ? '0 4px 16px 0 rgba(0,0,0,0.1)' : undefined,
  cursor: 'pointer',
  borderRadius: variant === 'badge' ? 24 : 0,
  position: 'relative',
  '& > span:first-of-type': {
    marginRight: 8,
  },
  '&:hover': {
    color: variant === 'badge' ? '#fff' : '#1976d2',
  },
}));

export const Bar = styled.div<ITabs>(({ selected }) => ({
  height: 3,
  background: selected ? '#1976d2' : undefined,
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
}));

export const Content = styled.div<{ withBorder: boolean; maxHeight: string; noPadding: boolean }>(
  ({ withBorder, maxHeight, noPadding }) => ({
    padding: noPadding ? 0 : '0 16px',
    borderTop: withBorder ? `1px solid #e0e0e0` : 'none',
    fontSize: 14,
    overflowY: 'scroll',
    maxHeight,
  }),
);

export const TabsItemStyled = styled.div({
  position: 'relative',
});

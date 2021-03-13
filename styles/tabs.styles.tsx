import styled from '@emotion/styled';

interface ITabs {
  selected?: boolean;
}

export const TabsStyled = styled.div({
  position: 'relative',
  height: '100%',
});

export const TabsList = styled.div<{ fixedHeader: boolean }>(({ fixedHeader }) => ({
  position: fixedHeader ? 'fixed' : 'relative',
  top: fixedHeader ? 0 : undefined,
  left: fixedHeader ? 0 : undefined,
  right: fixedHeader ? 0 : undefined,
  backgroundColor: fixedHeader ? '#fff' : undefined,
  boxShadow: fixedHeader ? '0 4px 16px 0 rgba(0,0,0,0.1)' : undefined,
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
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

export const Title = styled.div<ITabs>(({ selected }) => ({
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: 12,
  padding: '16px',
  color: selected ? '#2196f3' : '#000',
  cursor: 'pointer',
  position: 'relative',
  '& > span:first-of-type': {
    marginRight: 8,
  },
  '&:hover': {
    color: '#2196f3',
  },
}));

export const Bar = styled.div<ITabs>(({ selected }) => ({
  height: 3,
  background: selected ? '#2196f3' : undefined,
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

import styled from '@emotion/styled';
import { IMoveStyle } from '@interfaces/imove';

export const MoveHeader = styled.span<IMoveStyle>(({ align }) => ({
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: align,
}));

export const MoveItem = styled.span<IMoveStyle>(({ align }) => ({
  fontSize: 14,
  textAlign: align,
}));

export const MoveType = styled.span<IMoveStyle>(
  ({ backgroundColor = 'white', color = 'black', align = 'center' }) => ({
    fontSize: 14,
    backgroundColor,
    color,
    borderRadius: 4,
    padding: '2px 6px',
    fontWeight: 600,
    textAlign: 'center',
    justifySelf: align,
    width: 'fit-content',
  }),
);

export const MoveDetails = styled.div<IMoveStyle>(({ show }) => ({
  fontSize: 14,
  display: show ? 'grid' : 'none',
  gridColumn: '1 / span 5',
  justifyContent: 'flex-start',
  borderBottom: '1px solid #e0e0e0',
  span: {
    marginBottom: 8,
  },
}));

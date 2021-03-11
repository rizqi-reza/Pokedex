import styled from '@emotion/styled';
import { ICard } from '@interfaces/icard';

export const Card = styled.div<ICard>(({ background }) => ({
  position: 'relative',
  minHeight: 80,
  boxShadow: '0 4px 16px 0 rgba(0,0,0,0.1)',
  borderRadius: 12,
  padding: 12,
  margin: 4,
  zIndex: 99,
  overflow: 'hidden',
  backgroundColor: background ? background : '#fff',
}));

export const CardHeader = styled.div(() => ({
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
}));

export const CardTitle = styled.h1(() => ({
  fontSize: 14,
  margin: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  padding: '4px 8px',
  borderRadius: 16,
}));

export const CardSubTitle = styled.label(() => ({
  fontSize: 12,
  margin: 0,
}));

export const CardImage = styled.img(() => ({
  float: 'right',
  maxWidth: 96,
  marginBottom: -22,
  marginRight: -22,
  borderRadius: '50%',
  zIndex: 999,
}));

export const CardBackground = styled.img(() => ({
  position: 'absolute',
  maxWidth: 115,
  right: -15,
  bottom: -15,
  opacity: 0.2,
  transform: 'rotate(-10deg)',
  zIndex: 99,
}));
import styled from '@emotion/styled';
import { IProgressValue } from '@interfaces/iprogressbar';

export const ProgressWrapper = styled.div({
  height: 18,
  width: '100%',
  borderRadius: 4,
  backgroundColor: '#e0e0e0',
});

export const ProgressValue = styled.div<IProgressValue>(({ percentValue }) => ({
  height: 18,
  width: `${percentValue}%`,
  borderRadius: 4,
  borderTopRightRadius: percentValue < 100 ? 0 : 4,
  borderBottomRightRadius: percentValue < 100 ? 0 : 4,
  backgroundColor: percentValue <= 50 ? '#9ccc65' : percentValue <= 70 ? '#29b6f6' : '#e57373',
}));

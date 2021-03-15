import React from 'react';
import { IProgressBar } from '@interfaces/iprogressbar';
import { ProgressValue, ProgressWrapper } from '@styles/progressBar.styles';

const ProgressBar: React.FC<IProgressBar> = ({ value, maxValue }) => {
  const percentValue = (value / maxValue) * 100;

  return (
    <ProgressWrapper>
      <ProgressValue percentValue={percentValue} />
    </ProgressWrapper>
  );
};

export default ProgressBar;

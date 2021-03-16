import { IPokeStat } from '@interfaces/ipokemon';
import React from 'react';
import { maxStat } from '@utils/constant';
import ProgressBar from '@components/progressBar';
import { Grid } from '@styles/grid.styles';
import { formatText } from '@utils/string';

const Stats: React.FC<{ stats: IPokeStat[] }> = ({ stats }) => {
  return (
    <>
      <h3>Basic Stats</h3>
      <Grid width={['120px', '25px', 'auto']} rowGap={22}>
        {stats?.map((stat: IPokeStat, index: number) => (
          <>
            <label>{formatText(stat.stat.name)}</label>
            <span>{stat.base_stat}</span>
            <ProgressBar value={stat.base_stat} maxValue={maxStat} />
          </>
        ))}
      </Grid>
    </>
  );
};
export default Stats;

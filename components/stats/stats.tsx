import { IPokeStat } from '@interfaces/ipokemon';
import React, { Fragment } from 'react';
import { maxStat } from '@utils/constant';
import ProgressBar from '@components/progressBar';
import { Grid } from '@styles/grid.styles';
import { formatText } from '@utils/string';
import { IStats } from '@interfaces/istats';

const Stats: React.FC<IStats> = ({ stats }) => {
  return (
    <>
      <h3>Basic Stats</h3>
      <Grid template={['120px', '25px', 'auto']} rowGap={22}>
        {stats?.map((stat: IPokeStat, index: number) => (
          <Fragment key={index}>
            <label>{formatText(stat.stat.name)}</label>
            <span>{stat.base_stat}</span>
            <ProgressBar value={stat.base_stat} maxValue={maxStat} />
          </Fragment>
        ))}
      </Grid>
    </>
  );
};
export default Stats;

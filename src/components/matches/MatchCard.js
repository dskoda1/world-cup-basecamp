// @flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';

import type { Match } from '../../types';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

type Props = {
    classes: {root: string},
    match: Match,
};

const MatchCard = (props: Props) => {

  const { 
    classes,
    match: {
        home_team,
        away_team,
        time,
        datetime,
    },
  } = props;
  
  let timeComponent = time != null ? <div>{time}</div> : <Moment date={datetime} format="MM/DD @ HH:mm" />;
  
  return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
            {home_team.code}
            &nbsp;<img src={`https://img.fifa.com/images/flags/2/${home_team.code}.png`} alt={`${home_team.country} flag`}/>
            &nbsp;&nbsp;{home_team.goals} : {away_team.goals}
            &nbsp;&nbsp;<img src={`https://img.fifa.com/images/flags/2/${away_team.code}.png`} alt={`${away_team.country} flag`}/>
            &nbsp;{away_team.code}
        </Typography>
        <Typography component="div">
          {timeComponent}
        </Typography>
      </Paper>
  );
}


export default withStyles(styles)(MatchCard);

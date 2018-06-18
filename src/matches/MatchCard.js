import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function MatchCard(props) {

  const { 
    classes,
    home_team,
    away_team,
    time,
    venue,
    location,
    datetime
  } = props;
  
  console.log(time)
  let timeComponent = time != null ? <div>{time}</div> : <Moment date={datetime} format="MM/DD @ HH:mm" />;
  
  return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
            {home_team.code}
            &nbsp;<img src={`https://img.fifa.com/images/flags/2/${home_team.code}.png`} />
            &nbsp;&nbsp;{home_team.goals} : {away_team.goals}
            &nbsp;&nbsp;<img src={`https://img.fifa.com/images/flags/2/${away_team.code}.png`} />
            &nbsp;{away_team.code}
        </Typography>
        <Typography component="div">
          {timeComponent}
        </Typography>
      </Paper>
  );
}

MatchCard.propTypes = {
    classes: PropTypes.object.isRequired,
    home_team: PropTypes.shape({
      code: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      goals: PropTypes.number.isRequired,
    }).isRequired,
    away_team: PropTypes.shape({
      code: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      goals: PropTypes.number.isRequired,
    }).isRequired,
    venue: PropTypes.string,
    location: PropTypes.string,
    status: PropTypes.string,
    time: PropTypes.string,
    fifa_id: PropTypes.string,
    datetime: PropTypes.string,
    last_event_update_at: PropTypes.string,
    last_score_update_at: PropTypes.string,
};

export default withStyles(styles)(MatchCard);

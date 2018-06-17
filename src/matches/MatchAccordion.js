import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    textAlign: 'left',

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    // alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function MatchAccordion(props) {

  const { 
    classes,
    home_team,
    away_team,
    time,
    venue,
    location
  } = props;
  
  
  
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>{home_team.country} vs {away_team.country} - {home_team.goals}:{away_team.goals} {time}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice<br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />

      </ExpansionPanel>
    </div>
  );
}

MatchAccordion.propTypes = {
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
    time: PropTypes.string.isRequired,
    fifa_id: PropTypes.string,
    datetime: PropTypes.string,
    last_event_update_at: PropTypes.string,
    last_score_update_at: PropTypes.string,

};


export default withStyles(styles)(MatchAccordion);

// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

import type { Match, Event } from '../../types/matches';

type Props = {
    match: Match,
    classes: {
        root: any,
        paper: any,
        button: any,
    },
};

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    }
  });


const MatchBody = ( props: Props ) => {
    const {
        classes,
        match
    } = props;

    const {
        // home_team,
        // away_team,
        home_team_events,
        away_team_events,
    } = match;


    return (
    <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <TeamEvents events={home_team_events} />
                
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <TeamEvents events={away_team_events} />
                </Paper>
            </Grid>
        </Grid>
    </div>
    );
};

type TeamEventProps = {
    events: Array<Event>
}

const TeamEvents = (props: TeamEventProps) => {
    return (
        <div>
            {props.events.reverse().map((event) => {
                return (
                    <div>{event.time} - {event.player} - {event.type_of_event}</div>
                )
            })}
        </div>
    );
}

export default withStyles(styles)(MatchBody);
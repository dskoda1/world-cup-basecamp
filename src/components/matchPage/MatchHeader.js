// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import type { Match } from '../../types/matches';

type Props = {
    match: Match,
    classes: {
        root: any,
        paper: any,
        button: any,
    },
};

// const TeamHeader = () => (
//     <div> Hello </div>
// );

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

// const url = http://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/esp.png&h=150&w=150

const MatchHeader = ( props: Props ) => {
    const {
        classes,
        match
    } = props;

    const {
        home_team,
        away_team,

        
    } = match;


    return (
        <Grid container spacing={24} className={classes.root}>
            <Grid item xs={2}>
                <Button 
                    variant="contained" 
                    href="/" 
                    className={classes.button}>
                    Home
                </Button>
            </Grid>
            <Grid item xs={8}>
                <Paper className={classes.paper} >
                    <Typography variant="title">
                        <img src={`https://img.fifa.com/images/flags/2/${home_team.code}.png`} alt={`${home_team.country} flag`}/>
                        &nbsp;&nbsp;{home_team.country}
                        &nbsp;&nbsp;{home_team.goals} : {away_team.goals}&nbsp;&nbsp;
                        {away_team.country}
                        &nbsp;&nbsp;<img src={`https://img.fifa.com/images/flags/2/${away_team.code}.png`} alt={`${away_team.country} flag`}/>
                    </Typography>
                </Paper>
            </Grid>
                
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    home team
                
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    away team
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(MatchHeader);
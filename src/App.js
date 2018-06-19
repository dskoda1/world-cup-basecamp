import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from 'react-router-dom';


import Header from './header'
import NotFound from './components/NotFound';
import TodaysMatches from './containers/TodaysMatches';


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

const App = ({classes}) => (
  <div>
    <Header />
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Switch>
          <Route exact component={TodaysMatches} path='/' />
          <Route path='*' component={NotFound} />
        </Switch>
      </Grid>
    </div>
  </div>
);

export default withStyles(styles)(App);

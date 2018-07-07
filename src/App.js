import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from 'react-router-dom';


import Header from './containers/Header'
import NotFound from './components/NotFound';
import HomePage from './containers/HomePage';
import MatchPage from './containers/MatchPage';

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
      <Grid container spacing={24} direction="column">
        <Switch>
          <Route exact component={HomePage} path='/' />
          <Route exact component={MatchPage} path = '/matches/:fifa_id' />
          <Route path='*' component={NotFound} />
        </Switch>
      </Grid>
    </div>
  </div>
);

export default withStyles(styles)(App);

import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

import { MatchCard } from '../components/matches';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

const initialState = {
  matches: [],
  loading: true,
  hasLoaded: false,
}

class TodaysMatches extends Component {
  
  constructor() {
    super()
    this.state = initialState;
  }
  
  componentWillMount() {
    axios.get('https://world-cup-json.herokuapp.com/matches/today')
      .then(res => this.setState({
        matches: res.data,
        hasLoaded: true,
        loading: false,
      }))
  }
  
  render() {
    let {
      matches, hasLoaded, loading
    } = this.state;
    let {
      classes
    } = this.props;
    
    let component = loading ? (<div>Loading.. </div>) : (<h3>Today's Matches</h3>)
    let matchesComponent = null;
    if (hasLoaded) {
      matchesComponent = matches.map((match) => {
        return (<MatchCard key={match.fifa_id} {...match} />);
        })
    }
    return (
        <div className={classes.root}>
          {component}
          {matchesComponent}
        </div>
    );
  }
}

export default withStyles(styles)(TodaysMatches);

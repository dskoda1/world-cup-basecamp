// @flow

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import type { Match } from '../../types';
import MatchCard from './MatchCard';

const styles = (theme: { spacing: { unit: number }}) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

type Props = {
    matches: Array<Match>,
    classes: { root: string },
    error: ?string,
    fetching: boolean,
};

class MatchList extends Component<Props> {
  
  render() {
    let {
      matches, 
      fetching, 
      error,
      classes
    } = this.props;
    
    if (fetching) {
      return (<div>Loading</div>);
    }
    
    if (error) {
      return (<div>An error has occurred. Please try again never. {error}</div>);
    }
    
    let matchesComponent = matches.map((match) => (
         <Link key={match.fifa_id} to={`/matches/${match.fifa_id}`} style={{ textDecoration: 'none' }}>
          <MatchCard match={match} />
         </Link>
    ));
    
    let component = matchesComponent.length ? 
              <div>{matchesComponent}</div> :
              <div>None Available</div>;
                  
    return (
        <div className={classes.root}>
          {component}
        </div>
    );
  }
}


export default withStyles(styles)(MatchList);


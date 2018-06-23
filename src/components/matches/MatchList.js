// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import MatchCard from './MatchCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

class MatchList extends Component {
  
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
          <MatchCard {...match} />
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

MatchList.propTypes = {
  classes: PropTypes.object.isRequired,
  matches: PropTypes.array.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.bool.isRequired,
}

export default withStyles(styles)(MatchList);


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


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
      return (<div>An error has occurred. Please try again never.</div>);
    }
    
    let matchesComponent = matches.map((match) => (
         <MatchCard key={match.fifa_id} {...match} />
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
}

export default withStyles(styles)(MatchList);


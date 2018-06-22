import React, { Component } from 'react';

import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { MatchList } from '../components/matches';
import {GET_MATCHES, GET_TODAYS_MATCHES} from '../redux/constants';


const MATCH_SELECT_OPTIONS = {
    TODAYS: 'today',
    ALL: 'all',
};

const initialState = {
    matchSelection: MATCH_SELECT_OPTIONS.TODAYS
}

class HomePage extends Component {
    constructor() {
        super()
        this.state = initialState;
    }
    
    componentWillMount() {
        this.props.getMatches();
        this.props.getTodaysMatches();
    }
        
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render() {
        
        const { matchSelection } = this.state;
        const { 
            todaysMatches,
            matches,
        } = this.props;
        
        let matchListProps = {};
        if (matchSelection === MATCH_SELECT_OPTIONS.TODAYS) {
            matchListProps = {
                ...todaysMatches
            };
        }
        else if (matchSelection === MATCH_SELECT_OPTIONS.ALL) {
            matchListProps = {
                ...matches,
            };
        }
        else {
            throw Error(`Unknown match selection: ${matchSelection}`);
        }
        
        return (
            <div>
                <span>
                    <Select
                        value={this.state.matchSelection}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'matchSelection',
                        }}
                      >
                        <MenuItem value={MATCH_SELECT_OPTIONS.TODAYS}>Todays Matches</MenuItem>
                        <MenuItem value={MATCH_SELECT_OPTIONS.ALL}>All Matches</MenuItem>
                      </Select>
                </span>
                <MatchList {...matchListProps} />
            </div>
        )   ;
    }
}

const mapStateToProps = ( {reducer, todaysMatches} ) => {
    return {
        matches: reducer,
        todaysMatches,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMatches: () => dispatch({type: GET_MATCHES}),
        getTodaysMatches: () => dispatch({type: GET_TODAYS_MATCHES})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
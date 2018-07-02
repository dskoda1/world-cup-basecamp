// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMatches } from '../redux/actions';
import MatchHeader from '../components/matchPage/MatchHeader';
import type { MatchReducerState } from '../types/reducers/index';

type Props = {
    getMatches: Function,
    matches: MatchReducerState,
    fifa_id: string,
};

class MatchPage extends Component<Props> {
    componentWillMount() {
        this.props.getMatches();
    }

    render() {

        const {
            matches: {
                fetching,
                matches,
                error,
            },
            fifa_id
        } = this.props

        let child = '';
        if (error) {
            child = `There was an error. go away ${error}`;
        }
        else if (fetching) {
            child = 'Loading..';
        }
        else if (matches){
            let match = matches.find((match) => match.fifa_id === fifa_id);
            if (match) {
                child = <MatchHeader match={match} />
            }
            else {
                child = `Match ${fifa_id} not found.`;
            }
        }

        return (
            <div>
                {child}    
            </div>
        )
    }
}

type RootReducer = {
    matches: MatchReducerState
}
type Context = {
    match: {
        params: {
            fifa_id: string,
        },
    },
};

const mapStateToProps = ( state: RootReducer, context: Context ) => {
    return {
        matches: state.matches,
        fifa_id: context.match.params.fifa_id
    }
}
const mapDispatchToProps = {
    getMatches
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchPage);

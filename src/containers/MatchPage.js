import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MatchPage extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                Match {this.props.fifa_id}       
            </div>
        )
    }
}

MatchPage.propTypes = {
    home_team: PropTypes.object,
    away_team: PropTypes.object,
    home_team_events: PropTypes.array,
    away_team_events: PropTypes.array,
    venue: PropTypes.string,
    location: PropTypes.string,
    status: PropTypes.string,
    fifa_id: PropTypes.string,
    datetime: PropTypes.string,
    last_event_update_at: PropTypes.string,
    last_score_update_at: PropTypes.string,
};


export default MatchPage;

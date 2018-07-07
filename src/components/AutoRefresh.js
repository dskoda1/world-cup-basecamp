// @flow

import React, { Component } from 'react'

// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

type Props = {
    onRefresh: Function
};

type State = {
    shouldRefresh: bool,
    seconds: number,
}

const initialState : State = {
    shouldRefresh: false,
    seconds: 0,
};

class AutoRefresh extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = initialState;
    };

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
        if (this.state.seconds >= 30) {
            this.clearRefreshTimer();
            this.props.onRefresh();
            this.setRefreshTimer();
        }
    }

    setRefreshTimer () {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    clearRefreshTimer() {
        clearInterval(this.interval);
        this.setState({seconds: 0});
    }

    componentWillUnmount() {
        this.clearRefreshTimer();
    }

    handleChange = event => {
        this.setState({shouldRefresh: event.target.checked});
        if (event.target.checked) {
            this.setRefreshTimer();
        } else {
            this.clearRefreshTimer();
        }
    };

    render() {
        return (
            <div>
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.shouldRefresh}
                            onChange={this.handleChange}
                            value="shouldRefresh"
                            color="primary"
                        />
                    }
                    label="Auto Refresh"
                    />
            </div>
        );
    }
    
};

export default AutoRefresh;
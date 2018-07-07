// @flow

import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import type { Match } from '../../types/matches';

type TabContainerProps = {
    children: React.Node,
    direction: string,
}

function TabContainer(props: TabContainerProps) {
    return (
      <Typography component="div" dir={props.direction} style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
}
  
  
const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 'auto',
    },
});
  
type TabContent = {
    title: string,
    body: React.Node,
    key: string,
};
type FullWidthTabsProps = {
    classes: {
        root: string,
    },
    theme: {
        direction: string,
    },
    tabs: Array<TabContent>
};
type FullWidthTabsState = {
    value: number
}

class FullWidthTabs extends React.Component<FullWidthTabsProps, FullWidthTabsState> {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    handleChangeIndex = index => {
      this.setState({ value: index });
    };
  
    render() {
        const { classes, theme } = this.props;
        const tabs = this.props.tabs || [];
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                        centered
                        >
                        {tabs.map(({title, key}) => <Tab label={title} key={key} />)}
                    </Tabs>
                </AppBar>
                    <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                    >
                    {tabs.map(({body, key}) => (
                        <TabContainer key={key} direction={theme.direction}>
                            {body}
                        </TabContainer>
                        )
                    )}
                </SwipeableViews>
            </div>
        );
    }
}

  
const TabsComponent = withStyles(styles, { withTheme: true })(FullWidthTabs);

type Props = {
    match: Match
}

const MatchDetails = ( props: Props ) => {
    const {
        match
    } = props;
    const tabs = [
        {
            key: 'summary',
            title: 'Summary',
            body: (
                <div >
                    {match.stage_name} - {match.status} <br />
                    Venue: {match.venue} <br />
                    Attendance: {match.attendance} <br />
                </div>
            )
        },
        {
            key: 'weather',
            title: 'Weather',
            body: (
                <div>
                    {match.weather.description} - {match.weather.temp_farenheit}&#176;F <br />
                    Wind speed: {match.weather.wind_speed} mph <br />
                </div>
            )
        },
    ]
    return (
        <div>
            <TabsComponent tabs={tabs}/>
        </div>
    );
};

export default MatchDetails;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { Match } from './matches';

const initialState = {
  matches: [],
  loading: true,
  hasLoaded: false,
}

class App extends Component {
  
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
    
    let component = loading ? (<div>Loading.. </div>) : (<div>Todays Matches</div>)
    let matchesComponent = null;
    if (hasLoaded) {
      matchesComponent = matches.map((match) => {
        return (<Match key={match.fifa_id} {...match} />);
        })
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the 2018 World Cup basecamp!</h1>
        </header>
        <p className="App-intro">
          {component}
          {matchesComponent}
        </p>
      </div>
    );
  }
}

export default App;

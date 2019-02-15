import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
           <Route exact path = "/" component = {HomePage}/>
        </Switch>
      </Router>
   
          
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

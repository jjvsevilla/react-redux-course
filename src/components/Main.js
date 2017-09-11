import React, { PureComponent } from 'react';
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route
} from 'react-router-dom';

import RestaurantGrid from './RestaurantGrid';
import Single from './Single';
import Header from './Header';

class Main extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={RestaurantGrid}/>
          <Route path="/view/:postId" component={Single}/>
        </div>
      </Router>
    );
  }
}

export default Main;
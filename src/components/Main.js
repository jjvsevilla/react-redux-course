import React, { PureComponent } from 'react';
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

import RestaurantGrid from './RestaurantGrid';
import Single from './Single';

const MainHeader = styled.h1`
  font-family: billabong, 'billabongregular';
  text-align: center;
  font-weight: 100;
  font-size: 13rem;
  margin: 2rem 0;
  letter-spacing: -1px;
  text-shadow: 0px 4px 0 rgba(18,86,136,0.11);

  a {
    color: #125688;
    text-decoration: none;

    &:focus {
      outline: 0;
    }
  }
`;

class Main extends PureComponent {
  render() {
    return (
        <Router>
          <div>
            <MainHeader>
              <Link to={'/'}>
                Restagram
              </Link>
            </MainHeader>
            <Route exact path="/" component={RestaurantGrid}/>
            <Route path="/view/:postId" component={Single}/>
          </div>
        </Router>
    );
  }
}

export default Main;
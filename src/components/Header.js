import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../helpers/media';

const HeaderWrapper = styled.h1`
  font-family: billabong, 'billabongregular';
  text-align: center;
  font-weight: 100;
  font-size: 10rem;
  margin: 2rem 0;
  letter-spacing: -1px;
  text-shadow: 0px 4px 0 rgba(18,86,136,0.11);
  transition: .8s font-size;

  ${media.desktop`font-size: 10rem;`}
  ${media.tablet`font-size: 7rem;`}
  ${media.phone`font-size: 5rem;`}

  a {
    color: #125688;
    text-decoration: none;

    &:focus {
      outline: 0;
    }
  }
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Link to={'/'}>
          Restagram
        </Link>
      </HeaderWrapper>
    );
  }
}

export default Header;
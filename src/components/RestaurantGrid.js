import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as likeActions from '../actions/likeActions';
import Restaurant from './Restaurant';

const RestaurantGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

class RestaurantGrid extends PureComponent {

  getRestaurants = () => {
    const { posts } = this.props;
    return posts.map((post, i) => <Restaurant key={i} i={i} post={post} {...this.props} />)
  }

  render() {
    return (
      <RestaurantGridWrapper>
        {this.getRestaurants()}
      </RestaurantGridWrapper>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts
  }),
  dispatch => (
    bindActionCreators(likeActions, dispatch)
  )
)(RestaurantGrid);
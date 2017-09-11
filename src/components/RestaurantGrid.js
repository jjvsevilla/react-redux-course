import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as likeActions from '../actions/likeActions';
import Restaurant from './Restaurant';
import { media } from './Media';

const RestaurantGridWrapper = styled.div`
  &.photo-grid {
    column-count: 3;
    column-gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;

    ${media.desktop`column-count: 3;`}
    ${media.tablet`column-count: 2;`}
    ${media.phone`column-count: 1;`}

    &:hover {
      figure {
        opacity: 0.3;
      }
    }

    figure {
      transition: .8s opacity;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

class RestaurantGrid extends PureComponent {

  getRestaurants = () => {
    const { posts, comments, increment } = this.props;

    return posts.map((post, i) =>
      <Restaurant key={i} i={i} post={post} comments={comments[post.code]} increment={increment} />)
  }

  render() {
    return (
      <RestaurantGridWrapper className="photo-grid">
        {this.getRestaurants()}
      </RestaurantGridWrapper>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts,
    comments: state.comments
  }),
  dispatch => (
    bindActionCreators(likeActions, dispatch)
  )
)(RestaurantGrid);
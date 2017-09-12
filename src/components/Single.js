import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentActions from '../actions/commentActions';
import styled from 'styled-components';
import Restaurant from './Restaurant';
import Comments from './Comments';
import { media } from './Media';

const SingleWrapper = styled.div`
  /*
  display: flex;
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  */


  column-count: 2;
  column-gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  ${media.tablet`column-count: 1;`}
  ${media.phone`column-count: 1;`}

  /*
  max-width: 900px;
  background: #fff;
  margin: 0 auto;
  */
  padding: 2rem;
  border: 1px solid #d3d3d3;
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
  position: relative;

  &.grid-figure{
    box-shadow: none;
    margin: 0 2rem 0 0;
    border: 0;
    padding: 0;
    flex: 1 0 60%;
    max-width: 60%;
  }

`;

class Single extends PureComponent {
  render() {
    const { match: { params: { postId } }, comments, posts } = this.props;
    const i = posts.findIndex(post => post.code === postId);
    const post = posts[i];
    const postComments = comments[postId] || [];
    return (
      <SingleWrapper className="single-photo">
        <Restaurant i={i} post={post} comments={postComments}/>
        <Comments postComments={postComments} postId={postId} />
      </SingleWrapper>
    );
  }
}

export default connect(
  state => ({
    comments: state.comments,
    posts: state.posts
  }),
  dispatch => (
    bindActionCreators(commentActions, dispatch)
  )
)(Single);
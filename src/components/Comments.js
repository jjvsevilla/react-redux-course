import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { media } from '../helpers/media';
import * as commentActions from '../actions/commentActions';

const CommentsWrapper = styled.div`
  width: 50%;
  ${media.tablet`width: 100%;`}
`;

const CommentWrapper = styled.div`
  border-bottom: 1px solid #d3d3d3;
  padding: 0.5rem 0;

  p {
    font-size: 1rem;
    margin: 0;
  }

  strong {
    color: #125688;
    margin-right: 5px;
  }

  &:hover {
    .remove-comment {
      opacity: 1;
    }
  }

  .remove-comment {
    background: none;
    border: 0;
    line-height: 1;
    opacity: 0;
    font-size: 1rem;

    &:hover {
      color: #f00;
    }
  }
`;

const CommentsForm = styled.form`
  input,
  textarea {
    width: 100%;
    border: 0;
    font-size: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #d3d3d3;
    outline: none;
    resize: vertical;
  }

`;

class Comments extends Component {

  constructor() {
    super();
    this.state = {
      author: '',
      comment: ''
    }
  }

  renderComments = () => {
    const { postComments } = this.props;
    return postComments.map(this.renderComment);
  }

  renderComment = (comment, i) => {
    const { postId } = this.props;
    return (
      <CommentWrapper className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={() => this.props.removeComment(postId, i)}>&times;</button>
        </p>
      </CommentWrapper>
    );
  }

  renderForm = () => {
    const { author, comment } = this.state;
    return (
      <CommentsForm className="comment-form" onSubmit={this.handleSubmit}>
        <input name="author" type="text" placeholder="author"  value={author} onChange={this.handleChange} />
        <input name="comment" type="text" placeholder="comment"  value={comment} onChange={this.handleChange} />
        <input type="submit" hidden />
      </CommentsForm>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { postId } = this.props;
    const { author, comment } = this.state;
    this.props.addComment(postId, author, comment);
    this.resetState();
  }

  resetState = () => {
    this.setState({
      author: '',
      comment: ''
    })
  }

  render() {
    return (
      <CommentsWrapper>
        {this.renderComments()}
        {this.renderForm()}
      </CommentsWrapper>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => (
    bindActionCreators(commentActions, dispatch)
  )
)(Comments);
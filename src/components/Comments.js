import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentActions from '../actions/commentActions';

class Comments extends Component {

  constructor() {
    super();
    this.state = {
      author: '',
      comment: ''
    }
  }

  renderComment = (comment, i) => {
    const { postId } = this.props;
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={() => this.props.removeComment(postId, i)}>&times;</button>
        </p>
      </div>
    );
  }

  renderForm = () => {
    const { author, comment } = this.state;
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input name="author" type="text" placeholder="author"  value={author} onChange={this.handleChange} />
        <input name="comment" type="text" placeholder="comment"  value={comment} onChange={this.handleChange} />
        <input type="submit" hidden />
      </form>
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
    const { postComments } = this.props;
    return (
      <div className="comments">
        {postComments.map(this.renderComment)}
        {this.renderForm()}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => (
    bindActionCreators(commentActions, dispatch)
  )
)(Comments);
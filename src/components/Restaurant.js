import React, { PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as likeActions from '../actions/likeActions';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import styled, { css } from 'styled-components';
import { media } from '../helpers/media';

const GridFigure = styled.figure`
  &.grid-figure {
    display: inline-block;
    width: 100%;
    margin: 0 0 2rem;
    padding: 0;
    border: 1px solid #d3d3d3;
    background: #fff;
    box-shadow: 0 0 0 5px rgba(0,0,0,0.03);

    ${props => props.isDetail && css`
      width: 50%;
      margin: 0 2rem 0 0;
      border: 0;
      box-shadow: none;
	  `}

    ${media.tablet`width: 100%;`}

    .grid-photo-wrap {
      position: relative;

      /*
        _animations
      */
      .likes-heart {
        opacity: 0;
        transition: all 0.5s;
        transform: translateX(-50%) translateY(-50%) scale(5);
        display: block;

        &.like-enter {
          transition: all 0.2s;
          transform: translateX(-50%) translateY(-50%) scale(1);
          opacity: 1;

          &.like-enter-active {
            transform: translateX(-50%) translateY(-50%) scale(5);
          }
        }

        &.like-leave-active {
          display: none;
        }
      }


      .grid-photo {
        width: 100%;
      }

      .likes-heart {
        background: url(https://emojipedia-us.s3.amazonaws.com/thumbs/120/microsoft/94/sparkling-heart_1f496.png) center no-repeat;
        background-size: contain;
        font-size: 2rem;
        padding: 1rem;
        position: absolute;
        color: #000;
        left: 50%;
        top: 50%;
        pointer-events: none;

        opacity: 0;
        transform: translateX(-50%) translateY(-50%) scale(5);
        transition: all 0.5s;
        display: block;
      }
    }

    .grid-figure-caption {
      margin: 0 2rem 2rem;

      .control-buttons {
        display: flex;
        justify-content: space-between;

        .likes {
          cursor: pointer;
        }
      }
    }
  }
`;

class Restaurant extends PureComponent {

  sendLike = ()  => {
    const { i } = this.props;
    this.props.increment(i);
  }

  render() {
    const { post, comments, isDetail } = this.props;
    return (
      <GridFigure className="grid-figure" isDetail={isDetail}>
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>

        <figcaption className="grid-figure-caption">
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={this.sendLike} className="likes">💖 {post.likes}</button>
            <Link to={`/view/${post.code}`} className="button">
              <span>💬 {comments ? comments.length : 0 }</span>
            </Link>
          </div>
        </figcaption>
      </GridFigure>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => (
    bindActionCreators(likeActions, dispatch)
  )
)(Restaurant);
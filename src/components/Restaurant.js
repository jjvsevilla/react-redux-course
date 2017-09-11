import React, { PureComponent} from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

const GridFigure = styled.figure`
  &.grid-figure {
    display: inline-block;
    width: 100%;
    margin: 0 0 2rem;
    padding: 0;
    border: 1px solid #d3d3d3;
    background: #fff;
    box-shadow: 0 0 0 5px rgba(0,0,0,0.03);

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
        background: url(http://f.cl.ly/items/3Y373q2Q3J3Y1j203n0m/Bitmap-3.png) center no-repeat;
        background-size: contain;
        font-size: 2rem;
        padding: 1rem;
        position: absolute;
        color: #125688;
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

        .comment-count {

          .speech-bubble {
            width: 1.5rem;
            height: 1.25rem;
            background: #125688;
            display: inline-block;
            border-radius: 50%;
            position: relative;

            :after {
              display: inline-block;
              position: absolute;
              content: '';
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 0 1.25rem 1.25rem 0;
              border-color: transparent #125688 transparent transparent;
              top: 30%;
              left: 0;
            }
          }
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
    const { post, comments } = this.props;
    return (
      <GridFigure className="grid-figure">
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
            <button onClick={this.sendLike} className="likes">&#10084; {post.likes}</button>
            <Link to={`/view/${post.code}`} className="button">
              <span className="comment-count">
                &#10084; {comments ? comments.length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>
      </GridFigure>
    );
  }
}

export default Restaurant;
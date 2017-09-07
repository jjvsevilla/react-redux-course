import React, { PureComponent} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GridFigure = styled.figure`
	flex-basis: calc(33.333% - 4rem);
	flex-grow: 1;
	flex-shrink: 0;
	margin: 0 2rem 2rem 2rem;
	padding: 2rem;
	border: 1px solid #d3d3d3;
	background: #fff;
	box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
	position: relative;
`;

class Restaurant extends PureComponent {
  render() {
    const { post, i, comments } = this.props;
    return (
      <GridFigure>
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>
        </div>
      </GridFigure>
    );
  }
}

export default Restaurant;
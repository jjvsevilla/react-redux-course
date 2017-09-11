import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentActions from '../actions/commentActions';
import styled from 'styled-components';

const SingleWrapper = styled.div`
  display: flex;
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  max-width: 900px;
  background: #fff;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #d3d3d3;
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
  position: relative;

`;

class Single extends PureComponent {
  render() {
    return (
      <SingleWrapper>
        Single
      </SingleWrapper>
    );
  }
}

export default connect(
  state => ({
    comments: state.comments
  }),
  dispatch => (
    bindActionCreators(commentActions, dispatch)
  )
)(Single);
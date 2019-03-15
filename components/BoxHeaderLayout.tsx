import * as React from 'react';

import styled from 'react-emotion';

const Header = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Left = styled('div')`
  min-width: 25%;
  width: 100%;
`;

const Right = styled('div')`
  flex-shrink: 0;
`;

interface IState {}

interface IProps {
  style?: any;
  right?: any;
}

export default class BoxHeaderLayout extends React.Component<IProps, IState> {
  render() {
    return (
      <Header style={this.props.style}>
        <Left>{this.props.children}</Left>
        <Right>{this.props.right}</Right>
      </Header>
    );
  }
}

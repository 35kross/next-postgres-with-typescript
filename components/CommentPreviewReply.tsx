import * as React from 'react';
import * as Text from './Text';
import * as Strings from '../common/strings';

import CommentPreviewHeader from './CommentPreviewHeader';
import LabelBold from './LabelBold';
import styled from 'react-emotion';

const CommentReplyContainer = styled('div')`
  border-left: 2px solid #ececec;
  padding-left: 24px;
`;

interface IState {}

interface IProps {
  viewer: any;
  style?: any;
  isEditable: boolean;
  isEditing: boolean;
  username: string;
  onDelete: (...args: any) => any;
  createdAt: string;
}

export default class CommentPreviewReply extends React.Component<IProps, IState> {
  render() {
    return (
      <CommentReplyContainer>
        <CommentPreviewHeader
          isEditing={this.props.isEditing}
          isEditable={this.props.isEditable}
          onDelete={this.props.onDelete}
          viewer={this.props.viewer}>
          <LabelBold>{this.props.username} </LabelBold>commented on
          <LabelBold> {Strings.toDate(this.props.createdAt)}</LabelBold>
        </CommentPreviewHeader>
        <Text.PostBody style={{ margin: '16px 0 16px 0' }}>{this.props.children}</Text.PostBody>
      </CommentReplyContainer>
    );
  }
}

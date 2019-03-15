import * as React from 'react';
import * as Strings from '../common/strings';
import * as Text from '../components/Text';

import BorderedItem from '../components/BorderedItem';

interface IState {}

interface IProps {
  commentLength: number;
  createdAt: string;
  username: string;
}

export default class PostLockup extends React.Component<IProps, IState> {
  render() {
    return (
      <aside style={{ marginTop: 8 }}>
        <BorderedItem style={{ marginRight: 16 }}>
          {this.props.commentLength} {Strings.pluralize('comment', this.props.commentLength)}
        </BorderedItem>
        <BorderedItem>
          <strong>{Strings.toDate(this.props.createdAt)}</strong> by{' '}
          <strong>{this.props.username}</strong>
        </BorderedItem>
      </aside>
    );
  }
}

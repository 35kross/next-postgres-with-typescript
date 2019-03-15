import * as React from 'react';

import UserPreview from './UserPreview';
import { IUser } from '../data-models';

interface IState {}

interface IProps {
  users: IUser[];
}

export default class UserList extends React.Component<IProps, IState> {
  render() {
    const users = this.props.users.map(user => (
      <UserPreview style={{ marginBottom: 16 }} key={`user-${user.id}`} user={user} />
    ));

    return <div>{users}</div>;
  }
}

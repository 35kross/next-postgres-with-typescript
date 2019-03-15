import * as React from 'react';

import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import UserList from '../components/UserList';
import NavPublic from '../components/NavPublic';
import NavAuthenticated from '../components/NavAuthenticated';
import withData from '../higher-order/withData';
import { IUser } from '../data-models';

interface IState {}

interface IProps {
  isAuthenticated: boolean;
  users: IUser[];
}

class Users extends React.Component<IProps, IState> {
  render() {
    let navigation = !this.props.isAuthenticated ? (
      <NavPublic />
    ) : (
      <NavAuthenticated />
    );
    return (
      <Document>
        {navigation}
        <ColumnLayout>
          <UserList users={this.props.users} />
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, (state: IState) => state)(Users);

import * as React from 'react';

import CommentList from '../components/CommentList';
import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import NavAuthenticated from '../components/NavAuthenticated';
import NavPublic from '../components/NavPublic';
import withData from '../higher-order/withData';
import { IComment } from '../data-models';

interface IState {}

interface IProps {
  isAuthenticated: boolean;
  comments: IComment[];
}

class Comments extends React.Component<IProps, IState> {
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
          <CommentList showResponse comments={this.props.comments} />
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, (state: IState) => state)(Comments);

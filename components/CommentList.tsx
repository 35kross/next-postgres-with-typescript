import * as React from 'react';

import CommentPreview from './CommentPreview';

import { connect } from 'react-redux';
import { IComment } from '../data-models';

interface IState {
}

interface IProps {
  showResponse: boolean;
  comments: IComment[];
}

class CommentList extends React.Component<IProps, IState> {

  render() {
    const comments = this.props.comments.map(c => (
      <CommentPreview
        style={{ marginBottom: 32 }}
        key={`cmmt-${c.id}`}
        showResponse={this.props.showResponse}
        {...c}
      />
    ));

    return <div className="container">{comments}</div>;
  }
}

export default connect(state => state)(CommentList);

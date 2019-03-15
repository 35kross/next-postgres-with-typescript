import * as React from 'react';
import * as Strings from '../common/strings';
import * as Actions from '../common/actions';

import Button from './Button';
import BorderedItem from './BorderedItem';
import BoxHeaderLayout from './BoxHeaderLayout';

import { connect } from 'react-redux';

interface IState {
  viewer: any;
}

interface IProps {
  dispatch: any;
  viewer: any;
  user: {
    id: string;
    username: string;
    createdAt: string;
  }
  style?: any;
}

class UserPreview extends React.Component<IProps, IState> {
  _handleDelete = () => {
    this.props.dispatch(Actions.viewerDelete());
  };

  render() {
    const isViewer = this.props.viewer && this.props.user.id === this.props.viewer.id;

    return (
      <div style={this.props.style}>
        <BoxHeaderLayout>
          <strong>{this.props.user.username}</strong>
        </BoxHeaderLayout>
        <BorderedItem>
          Joined on {Strings.toDate(this.props.user.createdAt)} <br />
          <br />
          {isViewer ? (
            <div>
              <Button onClick={this._handleDelete}>Delete your account</Button>
            </div>
          ) : (
            undefined
          )}
        </BorderedItem>
      </div>
    );
  }
}

export default connect((state: IState) => {
  return { viewer: state.viewer };
})(UserPreview);

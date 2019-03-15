import * as React from 'react';
import * as Actions from '../common/actions';

import Link from './Link';
import NavLayout from './NavLayout';

import { connect } from 'react-redux';
import { css } from 'react-emotion';
import { IPost, IComment, IUser } from '../data-models';

const linkStyles = css`
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: #000000;

  :visited {
    color: #000000;
  }

  :hover {
    color: blue;
    text-decoration: underline;
  }
`;

interface IState {}

interface IProps {
  dispatch: any;
  posts: IPost[];
  comments: IComment[];
  users: IUser[];
}

class Nav extends React.Component<IProps, IState> {
  _handleLogout = () => {
    this.props.dispatch(Actions.requestLogout());
  };

  render() {
    return (
      <NavLayout>
        <Link className={linkStyles} href="/write" style={{ marginRight: '24px' }}>
          Write
        </Link>
        <Link className={linkStyles} href="/" style={{ marginRight: '24px' }}>
          Posts ({this.props.posts.length})
        </Link>
        <Link className={linkStyles} href="/comments" style={{ marginRight: '24px' }}>
          Comments ({this.props.comments.length})
        </Link>
        <Link className={linkStyles} href="/users" style={{ marginRight: '24px' }}>
          Users ({this.props.users.length})
        </Link>
        <Link className={linkStyles} onClick={this._handleLogout}>
          Log out
        </Link>
      </NavLayout>
    );
  }
}

export default connect(state => state)(Nav);

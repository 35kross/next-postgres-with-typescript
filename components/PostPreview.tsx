import * as React from 'react';
import * as Text from './Text';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';

import Button from './Button';
import PostLockup from './PostLockup';

import { connect } from 'react-redux';
import { IComment } from '../data-models';

interface IState {}

interface IProps {
  post: {
    id: string;
    title: string;
    comments: IComment[];
    createdAt: string;
    user: {
      username: string;
    };
    content: string;
  };
}

export default class PostPreview extends React.Component<IProps, IState> {
  _handleViewPost = (id: string) => {
    window.location.href = `/post/${id}`;
  };

  render() {
    const { post } = this.props;
    return (
      <div
        onClick={() => this._handleViewPost(post.id)}
        style={{ cursor: 'pointer', marginBottom: '48px' }}
      >
        <Text.Heading1>{post.title ? post.title : 'untitled'}</Text.Heading1>
        <PostLockup
          commentLength={post.comments.length}
          createdAt={post.createdAt}
          username={post.user.username}
        />
        <Text.PostBody style={{ marginTop: 24 }}>
          {Strings.elide(post.content, 256)}
          <br />
          <br />
          <Button>Read more</Button>
        </Text.PostBody>
      </div>
    );
  }
}

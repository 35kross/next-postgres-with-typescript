import * as React from 'react';

import PostPreview from './PostPreview';

import { connect } from 'react-redux';
import { IPost } from '../data-models';

interface IState {}

interface IProps {
  posts: IPost[];
}

class PostList extends React.Component<IProps, IState> {
  render() {
    const posts = this.props.posts.map(p => <PostPreview key={`post-${p.id}`} post={p} />);

    return <div>{posts}</div>;
  }
}

export default connect(state => state)(PostList);

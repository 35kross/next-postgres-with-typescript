import * as React from 'react';

import Textarea from './Textarea';
import Button from './Button';

import { connect } from 'react-redux';

interface IState {}

interface IProps {
  onTitleChange: (...args:any) => any;
  onContentChange: (...args:any) => any;
  title: string;
  style?: any;
}

class PostForm extends React.Component<IProps, IState> {
  render() {
    return (
      <div style={this.props.style}>
        <Textarea
          onChange={this.props.onTitleChange}
          value={this.props.title}
          placeholder="Optional title"
          style={{ marginBottom: 24 }}
        />
        <Textarea
          onChange={this.props.onContentChange}
          placeholder="Start writing..."
          style={{ height: 640, marginBottom: 24 }}
        />
      </div>
    );
  }
}

export default connect(state => state)(PostForm);

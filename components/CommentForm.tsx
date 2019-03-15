import * as React from 'react';
import Border from './Border';
import Textarea from './Textarea';
import Button from './Button';
import * as Actions from '../common/actions';
import * as Text from './Text';
import { connect } from 'react-redux';

interface IState {
  content: string;
}

interface IProps {
  postId: string;
  commentId: string;
  title: string;
  isReplying: any;
  dispatch: any;
  onCancel: (...args: any) => any;
  autoFocus: any;
  placeholder: string;
}

class CommentForm extends React.Component<IProps, IState> {
  state = {
    content: '',
  };

  _handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ content: e.target.value });
  };

  _handleSend = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = {
      commentId: this.props.commentId,
      content: this.state.content,
      postId: this.props.postId,
    };

    if (this.props.commentId) {
      return this.props.dispatch(Actions.requestSaveReply(data));
    }

    return this.props.dispatch(Actions.requestSaveComment(data));
  };

  render() {
    return (
      <div>
        <header style={{ margin: '16px 0 16px 0' }}>
          <Text.PageTitle>{this.props.title}</Text.PageTitle>
          <div>
            {this.props.isReplying ? (
              <Button onClick={this.props.onCancel}>Cancel</Button>
            ) : (
              undefined
            )}
          </div>
        </header>
        <div>
          <Textarea
            autoFocus={this.props.autoFocus}
            label="comment"
            placeholder={this.props.placeholder}
            value={this.state.content}
            onChange={this._handleContentChange}
            style={{ marginBottom: 24 }}
          />
          <div>
            <Button onClick={this._handleSend}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state: IState) => state)(CommentForm);

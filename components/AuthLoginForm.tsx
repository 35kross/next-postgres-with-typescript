import * as React from 'react';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';

import Input from './Input';
import Button from './Button';
import Border from './Border';

import { connect } from 'react-redux';

interface IState {}

interface IProps {
  dispatch: any;
  style?: any;
}

class AuthLoginForm extends React.Component<IProps, IState> {
  state = {
    username: '',
    password: '',
  };

  _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.dispatch(Actions.requestLogin(this.state));
  };

  render() {
    return (
      <div style={this.props.style}>
        <Input
          label="Username"
          autoFocus
          value={this.state.username}
          name="username"
          onChange={this._handleChange}
        />
        <Input
          label="Password"
          value={this.state.password}
          type="password"
          name="password"
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <Button onClick={this._handleSubmit} style={{ marginTop: 16 }}>
          Log in
        </Button>
      </div>
    );
  }
}

export default connect(state => state)(AuthLoginForm);

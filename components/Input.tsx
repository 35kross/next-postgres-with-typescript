import * as React from 'react';
import Label from './Label';
import { css } from 'react-emotion';

const baseStyles = css`
  position: relative;
`;

const inputStyles = css`
  width: 100%;
  outline: 0;
  border: 0;
  background: #666;
  color: #ffffff;
  padding: 48px 8px 16px 8px;
  margin-bottom: 8px;
  font-size: 16px;

  :focus {
    background: blue;
  }
`;

interface IState {}

interface IProps {
  onChange: (...args: any) => any;
  onSubmit: (...args: any) => any;
  onKeyUp: (...args: any) => any;
  placeholder?: string;
  value: string;
  label: string;
  name: string;
  type?: string;
  autoFocus?: boolean;
}

export default class Input extends React.Component<IProps, IState> {
  static defaultProps = {
    onChange: (...input: any) => {},
    onSubmit: () => {},
    onKeyUp: () => {},
  };

  _handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      this.props.onSubmit(e);
      return;
    }

    this.props.onKeyUp(e);
  };

  componentDidMount = () => {
    if (this.props.autoFocus) {
      //@ts-ignore
      this.refs.input.focus();
    }
  };

  render() {
    return (
      <div className={baseStyles}>
        {this.props.label ? <Label>{this.props.label}</Label> : undefined}
        <input
          ref="input"
          autoComplete="off"
          className={inputStyles}
          onChange={this.props.onChange}
          onKeyUp={this._handleKeyUp}
          placeholder={this.props.placeholder}
          value={this.props.value}
          name={this.props.name}
          type={this.props.type}
        />
      </div>
    );
  }
}

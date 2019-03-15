import * as React from 'react';

import Label from './Label';

import { css } from 'react-emotion';

const textareaStyles = css`
  width: 100%;
  resize: none;
  outline: 0;
  border: 1px solid #ececec;
  padding: 16px 8px 16px 8px;

  &:focus {
    outline: 0;
    border: 1px solid blue;
  }
`;

interface IState {}

interface IProps {
  onChange: (...args: any) => any;
  value?: string;
  autoFocus?: boolean;
  name?: string;
  label?: string;
  fontSize?: string;
  height?: number;
  fontWeight?: number;
  lineHeight?: string;
  placeholder?: string;
  style?: any;
}

export default class Textarea extends React.Component<IProps, IState> {
  render() {
    return (
      <textarea
        autoComplete="off"
        style={this.props.style}
        className={textareaStyles}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value}
        name={this.props.name}
      />
    );
  }
}

import * as React from 'react';

import Link from 'next/link';

import { css } from 'react-emotion';
import { UrlObject, Url } from 'url';

interface IProps {
  href?: string | UrlObject | Url;
  as?: string | UrlObject | Url;
  onClick?: (...args: any) => any;
  className?: string;
  style?: any;
}

export default class CustomLink extends React.Component<IProps> {
  render() {
    if (this.props.onClick) {
      return (
        <span
          className={this.props.className}
          style={this.props.style}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </span>
      );
    }

    return (
      <Link href={this.props.href} as={this.props.as}>
        <a className={this.props.className} style={this.props.style}>
          {this.props.children}
        </a>
      </Link>
    );
  }
}

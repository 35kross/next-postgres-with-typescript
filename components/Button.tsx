import { css } from 'react-emotion';

const buttonStyle = css``;

interface IProps {
  children: React.ReactNode;
  onClick?: (...args: any) => any;
  style?: any;
}

export default (props: IProps) => (
  <button {...props} className={buttonStyle}>
    {props.children}
  </button>
);

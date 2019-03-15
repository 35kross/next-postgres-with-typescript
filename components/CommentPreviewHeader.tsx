import * as React from 'react';

import Button from './Button';
import BoxHeaderLayout from './BoxHeaderLayout';

interface IState {}

interface IProps {
  viewer: any;
  style?: any;
  isEditable: boolean;
  isEditing: boolean;
  onEdit?: (...args: any) => any;
  onCancel?: (...args: any) => any;
  onDelete?: (...args: any) => any;
}

export default class CommentPreviewHeader extends React.Component<
  IProps,
  IState
> {
  render() {
    const {
      viewer,
      isEditable,
      isEditing,
      style,
      onEdit,
      onCancel,
      onDelete,
    } = this.props;

    const rightElements = [
      viewer && isEditable && !isEditing && onEdit ? (
        <Button
          key="edit"
          onClick={this.props.onEdit}
          style={{ marginRight: 8 }}
        >
          Edit
        </Button>
      ) : (
        undefined
      ),
      viewer && isEditable && isEditing && onCancel ? (
        <Button
          key="cancel"
          onClick={this.props.onCancel}
          style={{ marginRight: 8 }}
        >
          Cancel
        </Button>
      ) : (
        undefined
      ),
      viewer && isEditable && !isEditing && this.props.onDelete ? (
        <Button key="delete" onClick={onDelete}>
          Delete
        </Button>
      ) : (
        undefined
      ),
    ];

    return (
      <BoxHeaderLayout right={rightElements} style={this.props.style}>
        {this.props.children}
      </BoxHeaderLayout>
    );
  }
}

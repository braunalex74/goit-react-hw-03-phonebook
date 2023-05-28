import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactItem.styled';

export default class ContactItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <ListItem>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
        <DeleteButton onClick={this.handleDelete}>Видалити</DeleteButton>
      </ListItem>
    );
  }
}

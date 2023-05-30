// import React from 'react';
// import { Form } from './ContactForm.styled';

// export class ContactForm extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name, number } = this.state;

//     if (this.isContactExist(name)) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     this.props.onAdd(name, number);
//     this.setState({ name: '', number: '' });
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   isContactExist(name) {
//     const { contacts } = this.props;
//     return contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//   }

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces."
//             required
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Number:
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Contact</button>
//       </Form>
//     );
//   }
// }

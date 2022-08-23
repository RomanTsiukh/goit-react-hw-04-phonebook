import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { List, Box, Button } from './ContactList.styled';

export default function Contacts({ contacts, onDeletContact }) {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Box key={contact.id}>
            <ContactItem name={contact.name} number={contact.number} />
            <Button onClick={() => onDeletContact(contact.id)}>Delet</Button>
          </Box>
        );
      })}
    </List>
  );
}

Contacts.prototype = {
  id: PropTypes.string.isRequired,
};

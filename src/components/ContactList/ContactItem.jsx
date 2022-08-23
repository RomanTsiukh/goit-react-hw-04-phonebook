import PropTypes from 'prop-types';

export function ContactItem(props) {
  const { name, number } = props;
  return (
    <li>
      <p>
        {name}: {number}
      </p>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <Title>Find contacts by name</Title>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

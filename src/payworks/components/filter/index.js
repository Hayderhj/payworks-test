import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Filter = ({
  label,
  onChange,
  placeholder,
  value
}) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    onChange(value);
  } 
  return (
    <div className="filter">
      <span className="filter__label">{label}</span>
      <input
        className="filter__input"
        autoComplete='off'
        type='text'
        onChange={handleInputChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

Filter.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

Filter.defaultProps = {
  label: '',
  placeholder: '',
  value: ''
};

export default Filter;

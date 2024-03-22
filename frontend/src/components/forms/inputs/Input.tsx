import React from 'react';
import PropTypes from 'prop-types';

type InputProps = {
  label: string;
  name: string;
  value: string | number;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({ label, name, value, onChange, placeholder, type, error }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <>
      <label htmlFor={name}>
        {label}
        <input id={name} name={name} type={type} value={String(value)} onChange={handleChange} placeholder={placeholder} />
      </label>
      {error && <p className='error'>{error}</p>}
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
};

export default Input;

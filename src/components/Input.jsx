import React from 'react';

const Input = ({ label, title, type, id, value, min, max, onChange}) => {
  return (
    <div className="form-control">
      <label htmlFor={ label }>{ title }</label>
      <input type={ type } id={ id } defaultValue={ value } min={ min } max={ max } onChange={ onChange } />
    </div>
  );
}

export default Input;

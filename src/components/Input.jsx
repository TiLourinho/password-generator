import React from 'react';

const Input = ({ label, title, type, id, value=10, min, max }) => {
  return (
    <div className="form-control">
      <label htmlFor={ label }>{ title }</label>
      <input type={ type } id={ id } defaultValue={ value } min={ min } max={ max } />
    </div>
  );
}

export default Input;

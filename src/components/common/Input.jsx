import React from "react";

const Input = ({ name, value, label, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        type="text"
        className="form-control"
        id={name}
        name={name}
        aria-describedby={`${name}Help`}
        placeholder={`Enter ${label}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

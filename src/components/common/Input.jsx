import React from "react";

const Input = ({ name, value, label, type, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        type={type}
        className="form-control"
        id={name}
        name={name}
        aria-describedby={`${name}Help`}
        placeholder={`Enter ${label}`}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

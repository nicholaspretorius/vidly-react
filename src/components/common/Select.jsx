import React from "react";

const Select = ({ name, value, label, options, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="form-control" id={name} name={name} value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;

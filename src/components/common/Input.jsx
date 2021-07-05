import React from "react";

const Text = ({ name, label, value, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        className="form-control"
        {...rest}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

const Select = ({ name, label, value, options = [], error, ...rest }) => {
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor={name}>
            {label}
          </label>
        </div>
        <select
          id={name}
          name={name}
          value={value}
          className="custom-select"
          {...rest}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </React.Fragment>
  );
};

export { Text, Select };

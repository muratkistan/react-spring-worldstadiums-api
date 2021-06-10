import React from 'react';

const Input = (props) => {
    const {label,error,name,onChange,type,placeholder,value} = props;
    const className =error ? "form-control is-invalid" : "form-control";
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        className={className}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;
import React from "react";
import "./FormInput.styles.scss";

function FormInputs({ label, type, name, value, onChange }) {
  return (
    <div className="form__inputs">
      <input
        className="form__inputsInput"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
      />
      <label className="form__inputsLabel">{label}</label>
    </div>
  );
}

export default FormInputs;

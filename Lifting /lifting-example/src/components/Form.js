import React from "react";
import FormInput from "./FormInput";

const Form = props => {
  return (
    <form>
      <FormInput label="Email:" inputName="email" inputValue={props.email} handleFormInput={props.handleFormInput} />
      <FormInput label="Contraseña:" inputName="password" inputValue={props.password} handleFormInput={props.handleFormInput} />
      <input className="form__btn" type="submit" value="Indentifícate" />
    </form>
  );
};

export default Form;

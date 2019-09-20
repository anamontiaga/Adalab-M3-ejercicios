import React from "react";
import Form from "./Form";

const Main = props => {
  return (
    <div>
      <h2 className="title--medium">Inicia sesión</h2>
      <Form email={props.email} password={props.password} handleFormInput={props.handleFormInput} />
    </div>
  );
};

export default Main;

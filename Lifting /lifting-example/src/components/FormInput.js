import React from "react";

class FormInput extends React.Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(ev) {
    const user = ev.target.value;
    this.props.handleFormInput(user);
    // data: this.props.data
    // DUDA 2: qué es data?
  }

  render() {
    return (
      <div>
        <label className="form__label">{this.props.label}</label>
        <input className="form__input-text" type="text" value={this.props.inputValue} onChange={this.handleChanges} />
      </div>
    );
  }
}

export default FormInput;

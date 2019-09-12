import React from "react";
import "./FilmForm.css";

class FilmForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="app">
        <form className="form">
          <label htmlFor="form--name">NOMBRE:</label>
          <input id="form--name" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <label htmlFor="form--description">DESCRIPCIÓN:</label>
          <textarea id="form--description" type="text" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
          <label htmlFor="form--language">IDIOMA:</label>
          <select id="form--language" type="text" name="language" value={this.state.language} onChange={this.handleChange}>
            <option value="español">Español</option>
            <option value="ingles">Inglés</option>
            <option value="portugues">Portugués</option>
          </select>
        </form>
        <div className="card">
          <p className="preview--name">Name: {this.state.name}</p>
          <p className="preview--decription">Descripción:{this.state.description}</p>
          <p className="preview--language">Idioma:{this.state.language}</p>
        </div>
      </div>
    );
  }
}

export default FilmForm;

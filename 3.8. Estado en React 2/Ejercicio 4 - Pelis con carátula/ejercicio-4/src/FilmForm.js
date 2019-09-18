import React from "react";
import "./FilmForm.css";
import InputFileReader from "./InputFileReader";

let genreItems = [];

class FilmForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
      age: "A",
      genre: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateCheckbox(event) {
    if (!genreItems.includes(event.target.value)) {
      genreItems[genreItems.length] = event.target.value;
    }
    this.setState({
      [event.target.name]: genreItems
    });
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

          <div className="age-radio">
            {" "}
            EDAD:
            <label htmlFor="A">
              A
              <input id="form--age" type="radio" name="age" value="A" onChange={this.handleChange} checked={this.state.age === "A" ? true : false} />
            </label>
            <label htmlFor="7">
              7
              <input id="form--age" type="radio" name="age" value="7" onChange={this.handleChange} checked={this.state.age === "7" ? true : false} />
            </label>
            <label htmlFor="12">
              12
              <input id="form--age" type="radio" name="age" value="12" onChange={this.handleChange} checked={this.state.age === "12" ? true : false} />
            </label>
            <label htmlFor="16">
              16
              <input id="form--age" type="radio" name="age" value="16" onChange={this.handleChange} checked={this.state.age === "16" ? true : false} />
            </label>
            <label htmlFor="18">
              18
              <input id="form--age" type="radio" name="age" value="18" onChange={this.handleChange} checked={this.state.age === "18" ? true : false} />
            </label>
            <div className="age-radio">
              {" "}
              GÉNERO:
              <label htmlFor="comedia">Comedia</label>
              <input type="checkbox" id="comedia" value="comedia" name="genre" onChange={this.updateCheckbox} checked={this.state.genre === "comedia" ? true : false} />
              <label htmlFor="drama">Drama</label>
              <input type="checkbox" id="drama" value="drama" name="genre" onChange={this.updateCheckbox} checked={this.state.genre === "drama" ? true : false} />
              <label htmlFor="fantasia">Fantasía</label>
              <input type="checkbox" id="fantasia" value="fantasia" name="genre" onChange={this.updateCheckbox} checked={this.state.genre === "fantasia" ? true : false} />
              <label htmlFor="accion">Acción</label>
              <input type="checkbox" id="accion" value="accion" name="genre" onChange={this.updateCheckbox} checked={this.state.genre === "accion" ? true : false} />
            </div>
          </div>
        </form>

        <div className="card">
          <p className="preview--name">
            <b>Name: </b>
            {this.state.name}
          </p>
          <p className="preview--decription">
            <b>Descripción: </b>
            {this.state.description}
          </p>
          <p className="preview--language">
            <b>Idioma: </b>
            {this.state.language}
          </p>
          <p className="preview--age">
            <b>Edad: </b>
            {this.state.age}
          </p>
          <p className="preview--genre">
            <b>Género: </b>
            {this.state.genre.join(",")}
          </p>
        </div>
      </div>
    );
  }
}

export default FilmForm;

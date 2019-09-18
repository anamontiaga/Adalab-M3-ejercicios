import React from "react";
import "./FilmForm.css";

inputFileChanged();

class InputFileReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
      value: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.inputFileChanged = this.inputFileChanged.bind(this);
  }

  render() {
    const { accept, capture, multiple } = this.props,
      { src, value } = this.state;
    return (
      <div>
        <img src={src} height={80} width={80} />
        <button onClick={this.handleClick}>Upload</button>
        <input type="file" ref="input_reader" accept={Array.isArray(accept) ? accept.join(",") : accept} multiple={multiple} capture={capture} style={{ display: "none" }} onChange={this.inputFileChanged} />
      </div>
    );
  }
}

InputFileReader.defaultProps = {
  accept: "image",
  capture: true,
  multiple: false
};

InputFileReader.propTypes = {
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  capture: PropTypes.bool,
  multiple: PropTypes.bool
};

export default InputFileReader;

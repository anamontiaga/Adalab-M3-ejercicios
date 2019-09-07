import React from "react";
import "./OnionHater.css";

class OnionHater extends React.Component {
  handleWrite(event) {
    if (event.target.value === "cebolla") {
      alert("ODIO LA CEBOLLA");
    }
  }
  render() {
    return <textarea name="textarea" rows="10" cols="50" placeholder="Write something here..." onKeyPress={this.handleWrite}></textarea>;
  }
}

export default OnionHater;

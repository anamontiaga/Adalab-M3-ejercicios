import React from "react";
import "./OnionHater.css";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleWrite = this.handleWrite.bind(this);
  }

  handleWrite(event) {
    if (event.target.value === "cebolla") {
      this.isHating = true;
    } else {
      this.isHating = false;
    }
    this.forceUpdate();
  }
  render() {
    if (this.isHating === true) {
      return (
        <div className="Screen red">
          <textarea className="selectCities" name="textarea" rows="10" cols="50" placeholder="Write something here..." onKeyPress={this.handleWrite}></textarea>
        </div>
      );
    } else {
      return (
        <div className="Screen ">
          <textarea className="selectCities" name="textarea" rows="10" cols="50" placeholder="Write something here..." onKeyPress={this.handleWrite}></textarea>
        </div>
      );
    }
  }
}

export default OnionHater;

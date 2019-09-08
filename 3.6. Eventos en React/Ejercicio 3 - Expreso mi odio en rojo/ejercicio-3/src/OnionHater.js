import React from "react";
import "./OnionHater.css";

class OnionHater extends React.Component {
  //   constructor(isHating) {
  //     super(isHating);
  //     this.isHating = this.isHating.bind(this);
  //   }
  handleWrite(event) {
    if (event.target.value === "cebolla") {
      this.style.backgroundColor = "red";
    } else {
      this.style.backgroundColor = "white";
    }
  }
  render() {
    return (
      <div className="screen">
        {this.color}
        <textarea className="selectCities" name="textarea" rows="10" cols="50" placeholder="Write something here..." isHating="false" onKeyPress={this.handleWrite}></textarea>
      </div>
    );
  }
}

export default OnionHater;

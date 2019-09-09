import React from "react";
import "./OnionHater.css";

class OnionHater extends React.Component {
  //   constructor(isHating) {
  //     super(isHating);
  //     this.isHating = this.isHating.bind(this);
  //   }

  // this.props.isHating = "true" &&

  handleWrite(event) {
    if (event.target.value === "cebolla") {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }
  render() {
    return (
      <div className="screen">
        <textarea className="selectCities" name="textarea" rows="10" cols="50" placeholder="Write something here..." onKeyPress={this.handleWrite}></textarea>
      </div>
    );
  }
}

export default OnionHater;

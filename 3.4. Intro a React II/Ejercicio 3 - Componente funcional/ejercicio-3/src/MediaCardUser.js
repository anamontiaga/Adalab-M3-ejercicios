import React from "react";

// class MediaCardUser extends React.Component {
//   render() {
//     return (
//       <header className="App-header">
//         <img src={this.props.src} className="App-foto" alt="foto" />
//         <div className="App-header-title">
//           <h1 className="App-header-maintitle">{this.props.name} </h1>
//           <h3 className="App-header-subtitle">{this.props.date}</h3>
//         </div>
//       </header>
//     );
//   }
// }

const MediaCardUser = props => {
  return (
    <header className="App-header">
      <img src={props.src} className="App-foto" alt="foto" />
      <div className="App-header-title">
        <h1 className="App-header-maintitle">{props.name} </h1>
        <h3 className="App-header-subtitle">{props.date}</h3>
      </div>
    </header>
  );
};

export default MediaCardUser;

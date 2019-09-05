import React from "react";

const MediaCard = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={props.src} className="App-foto" alt="foto" />
        <div className="App-header-title">
          <h1 className="App-header-maintitle">{props.name} </h1>
          <h3 className="App-header-subtitle">{props.date}</h3>
        </div>
      </header>
      <main className="App-main">
        <p className="App-main-paragraph">{props.content}</p>
      </main>
      <footer className="App-footer">
        <p className="App-footer-paragraph">{props.footertext}</p>
        <i class={props.icon}></i>
      </footer>
    </div>
  );
};

export default MediaCard;

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="containerName">
          <h1 className="display-4">
            Hi, I'm <text style={{ color: "#09f" }}>Erick </text>Segura .<span>&#160;</span>
          </h1>
        </div>
        <p className="lead">
          +58 (412) 103 6964 ·
          <span style={{ color: "#8bc34a" }}>gestionecesaria@gmail.com </span> ·
          Maturin, Monagas, Vzla
        </p>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import logo from "../../images/parvati_logo.png";

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="logo" />
      <div className="hometitle">
        <h2>Es momento de empezar a cuidarte</h2>
      </div>
    </div >


  );
}

export default Home;

import React from 'react';
import logo from "../../images/parvati_logo.png";
import Carrousel from "../../components/home/Carrousel"

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="logo" />
      <div className="hometitle">
        <h2>Es momento de empezar a cuidarte</h2>
      </div>
    </div >

    <div className="carrouselStyle">
      <carrousel />

    </div>
  );
}

export default Home;

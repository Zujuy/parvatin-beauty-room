import React from 'react';
import logo from "../../images/parvati_logo.png";
import { Carousel, About, OurServices, Grades } from "../../style/components"
import Carrousel from "../../components/home/Carrousel"
import Aboutus from "../../components/home/Aboutus"
import Services from "../../components/home/Services"
import Testimonies from './Testimonies';



function Home() {
  return (
    <div>
      <div className="home">
        <img src={logo} alt="logo" />
        <div className="hometitle">
          <h2>Es momento de empezar a cuidarte</h2>
        </div>
      </div >

      <div>
        <Carrousel />
      </div>

      <div>
        <Aboutus />
      </div>

      <div>
        <Services />
      </div>

      <div>
        <Testimonies />
      </div>
    </div>

  );
}

export default Home;

import React from 'react';
import logo from "../../images/parvati_logo.png";
import Aboutus from "../../components/home/Aboutus"
import Services from "../../components/home/Services"
import Testimonies from './Testimonies';
import Form from './Form';
import Footer from './Footer';
import Footer2 from './Designfooter';
import Carousel from './Carousel2';



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
        <Carousel />
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

      <div>
        <Form />
      </div>

      <div>
        <Footer />
      </div>

      <div>
        <Footer2 />
      </div>
    </div>

  );
}

export default Home;

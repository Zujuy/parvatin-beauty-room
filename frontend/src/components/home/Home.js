import React from 'react';
import logo from '../../images/parvati_logo.png';
import Aboutus from '../../components/home/Aboutus';
import Services from '../../components/home/Services';
import Testimonies from './Testimonies';
import Form from './Form';
import Footer from './Footer';
import Footer2 from './Designfooter';
import Carousel from './Carousel2';

function Home() {
  return (
    <div>
      <div class="icon-bar">
        <a
          href="https://www.facebook.com/Parvati-Beauty-Room-103248328161616"
          target="_blank"
          class="facebook"
        >
          <i class="fa fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/parvati.br/"
          target="_blank"
          class="instagram"
        >
          <i class="fa fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/message/QHIRF3BWWU5BC1"
          target="_blank"
          class="whatsapp"
        >
          <i class="fa fa-whatsapp"></i>
        </a>
      </div>
      <div className="home">
        <img src={logo} alt="logo" />
        <div className="hometitle">
          <h3>Es momento de empezar a cuidarte</h3>
        </div>
      </div>
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

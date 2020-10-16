import React from 'react';
import logo from '../../images/parvati_logo.png';
import Aboutus from '../../components/home/Aboutus';
import Services from '../../components/home/Services';
import Testimonies from './Testimonies';
import Form from './Form';
import Footer from './Footer';
import Footer2 from './Designfooter';
import Carousel from './Carousel2';
import { useMediaQuery, MediaQuery } from 'react-responsive';
import HomeMobile from '../mobile/HomeMobile';
import RRSSBar from './SocialBar';

function Home() {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 720px)',
  });

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })
  return (
    <div>
      {isMobile && (
        <>
          {' '}
          <HomeMobile />{' '}
        </>
      )}
      {
        isDesktop && (
          <>
          <RRSSBar />
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
          </>
        )
      }
      
    </div>
  );
}

export default Home;

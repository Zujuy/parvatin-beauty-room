import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../images/parvati_logo.png';
import { HomeMobileStyle } from '../../style/components';
import { SocialMediaMobile } from '../../style/components';

function HomeMobile() {
  return (
    <div>
      <SocialMediaMobile>
        <div class="icon-bar">
          <a
            href="https://www.instagram.com/parvati.br/"
            target="_blank"
            class="instagram"
          >
            <i class="fa fa-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/Parvati-Beauty-Room-103248328161616"
            target="_blank"
            class="facebook"
          >
            <i class="fa fa-facebook"></i>
          </a>
        </div>
      </SocialMediaMobile>
      <div>
        <HomeMobileStyle>
          <div className="HomeMobile">
            <img src={logo} alt="logo" />
            <div className="hometitle">
              <br></br>
              <br></br>
              <br></br>
              <h3>Es momento de empezar a cuidarte</h3>
            </div>
          </div>
        </HomeMobileStyle>
      </div>
    </div>
  );
}

export default HomeMobile;

import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../images/parvati_logo.png';
import beautyintro from '../../images/beautymobile.png';
import nutritionintro from '../../images/nutritionbeauty.png';
import massageintro from '../../images/massageMobile.png';
import { HomeMobileStyle } from '../../style/components';
import { SocialMediaMobile } from '../../style/components';
import { IntroMobile } from '../../style/components';
import { AboutusMobile } from '../../style/components';

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
      <div>
        <IntroMobile>
          <div className="images">
            <img src={beautyintro} alt="Beauty" />
            <div className="boton1">
              <button type="button" class="btn text-light">
                <h4>CLICK AQUÍ</h4>
              </button>
            </div>
            <br></br>
            <br></br>
            <img src={nutritionintro} alt="Nutrition" />
            <div className="boton2">
              <button type="button" class="btn text-light">
                <h4>¡EMPIEZA AHORA!</h4>
              </button>
            </div>
            <br></br>
            <br></br>
            <img src={massageintro} alt="Massage" />
            <div className="boton3">
              <button type="button" class="btn text-light">
                <h4>¡EMPIEZA AHORA!</h4>
              </button>
            </div>
            <div></div>
          </div>
        </IntroMobile>
      </div>

      <div>
        <AboutusMobile>
          <div classname="text">
            <h5>SOBRE NOSOTROS</h5>
            <p>Somos un centro de bienestar integral para hombres y mujeres.</p>
            <br></br>
            <p>
              Nuestro objetivo es{' '}
              <strong>
                inspirar a más personas a realizar un cambio de hábitos
                estéticos, alimenticios y físicos
              </strong>
              , de forma personalizada y siempre de la mano de una experta
            </p>
            <div className="botonabout">
              <button type="button" class="btn text-light">
                <h4>¡CONTINUA LEYENDO!</h4>
              </button>
            </div>
          </div>
        </AboutusMobile>
      </div>
    </div>
  );
}

export default HomeMobile;

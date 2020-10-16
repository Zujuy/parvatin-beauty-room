import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../images/parvati_logo.png';
import beautyintro from '../../images/beautymobile.png';
import nutritionintro from '../../images/nutritionbeauty.png';
import massageintro from '../../images/massageMobile.png';
import aboutimage from '../../images/abutusmobile.png';
import beautycircle from '../../images/beautycircle.png';
import nutritioncircle from '../../images/nutritioncircle.png';
import workoutcircle from '../../images/workoutcircle.png';
import testimonio1 from '../../images/testimonie1.png';
import testimonio2 from '../../images/testimonie2.png';
import testimonio3 from '../../images/testimonie3.png';
import logomobile from '../../images/parvatimobilelogo.png';
import MobileForm from './MobileForm';
import {
  HomeMobileStyle,
  SocialMediaMobile,
  IntroMobile,
  AboutusMobile,
  ServicesMobile,
  TestimoniesMobile,
  MobileFooter,
  Designfootermobile,
} from '../../style/components';
import SocialBar from '../../components/home/SocialBar';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function HomeMobile() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <div>
      <SocialBar />
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
              <button
                type="button"
                class="btn text-light"
                onClick={executeScroll}
              >
                <h4>CLICK AQUÍ</h4>
              </button>
            </div>
            <br></br>
            <br></br>
            <img src={nutritionintro} alt="Nutrition" />
            <div className="boton2">
              <button
                type="button"
                class="btn text-light"
                onClick={executeScroll}
              >
                <h4>¡EMPIEZA AHORA!</h4>
              </button>
            </div>
            <br></br>
            <br></br>
            <img src={massageintro} alt="Massage" />
            <div className="boton3">
              <button
                type="button"
                class="btn text-light"
                onClick={executeScroll}
              >
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
              <button
                type="button"
                class="btn text-light"
                onClick={executeScroll}
              >
                <h4>¡CONTINUA LEYENDO!</h4>
              </button>
              <br></br>
            </div>
            <div className="imageabout">
              <img src={aboutimage} alt="About" />
            </div>
          </div>
        </AboutusMobile>
      </div>

      <div>
        <ServicesMobile>
          <div className="servicetext" ref={myRef}>
            <h5>NUESTROS SERVICIOS</h5>
            <p>
              En nuestro cuerpo todo está conectado y si nos ponemos a trabajar
              en los buenos hábitos, no sabes lo positivo que esto puede
              resultar para un óptimo funcionamiento del mismo.
            </p>
            <p>¡Nosotras te decimos cómo cuidarte!</p>
          </div>
          <div className="circles">
            <img src={beautycircle} alt="beauty" />
            <img src={nutritioncircle} alt="nutrition" />
            <img src={workoutcircle} alt="workout" />
          </div>
        </ServicesMobile>
      </div>

      <div>
        <TestimoniesMobile>
          <div className="testimoniestext">
            <h4>TESTIMONIOS</h4>
            <p>
              En PARVATI nos preocupamos por brindarte el mejor servicio, es por
              eso que construimos este espacio para que dejes tus comentarios y
              sugerencias.{' '}
            </p>
          </div>
          <div className="testimonio1">
            <img src={testimonio1} alt="cliente1" />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="testimonio2">
            <img src={testimonio2} alt="cliente2" />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="testimonio3">
            <img src={testimonio3} alt="cliente3" />
          </div>
          <br></br>
          <br></br>
        </TestimoniesMobile>
      </div>
      <div>
        <MobileForm />
      </div>
      <div>
        <MobileFooter>
          <div className="imagelogo">
            <img src={logomobile} alt="parvati" />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="direction">
            <p>
              <strong>BEAUTY ROOM SERVICE</strong>
            </p>
            <p>
              Horario 09:00 a 19:00 hrs <br></br> <br></br>+55 7422 6925 | +55
              5040 8099
              <br></br>
              <br></br>beautyroom@parvati.com.mx <br></br>
              <br></br>Cuauhtémoc, Fernando de Alva Ixtlilxóchitl 111A, Obrera,
              Cuauhtémoc, 06800 Ciudad de México, CDMX
            </p>
          </div>
        </MobileFooter>
        <Designfootermobile>
          <div>
            <p>
              Diseñado por: <strong>JÁBALI DIGITAL MARKETING</strong>
            </p>
          </div>
        </Designfootermobile>
      </div>
    </div>
  );
}

export default HomeMobile;

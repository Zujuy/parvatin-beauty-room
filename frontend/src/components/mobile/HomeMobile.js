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
import beauty_modal from '../../images/beauty_modal.png';
import beauty_imagem from '../../images/beauty_imagem.png';
import nutrition_modal from '../../images/nutrition_modal.png';
import nutrition_imagem from '../../images/nutrition_imagem.png';
import workout_modal from '../../images/workout_modal.png';
import workout_imagem from '../../images/workout_imagem.png';

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
            </div>
            <div className="boton1" >
              <button
                id="btext1"
                type="button"
                class="btn text-light"
                onClick={executeScroll}
              >
                <p>CLICK AQUÍ</p>
              </button>
            </div>
            <br></br>
            <br></br>
            <div className="images">
            <img src={nutritionintro} alt="Nutrition" />
            </div>
            <div className="boton2">
              <button
                id="btext2"
                type="button"
                class="btn text-light"
                onClick={executeScroll}
              >
                <p>¡EMPIEZA AHORA!</p>
              </button>
            </div>
            <br></br>
            <br></br>
            <div className="images">
            <img src={massageintro} alt="Massage" />
            </div>
            <div className="boton3">
              <button
                id="btext2"
                type="button"
                class="btn text-light"
                onClick={executeScroll}
              >
                <p>¡EMPIEZA AHORA!</p>
              </button>
            </div>
            <div></div>
        </IntroMobile>
      </div>

      <div>
        <AboutusMobile>
          <div classname="text">
            <h5>SOBRE NOSOTROS</h5>
            <p>Somos un centro de bienestar integral para hombres y mujeres.<br></br>
              Nuestro objetivo es{' '}
              <strong>
                inspirar a más personas a realizar un cambio de hábitos
                estéticos, alimenticios y físicos {' '}
              </strong>
               de forma personalizada y siempre de la mano de una experta.
            </p>
            <div className="botonabout">
              <button
                type="button"
                class="btn text-light"
                onClick={executeScroll}
              >
                <h4>¡CONTIÚA LEYENDO!</h4>
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
          <div class="container">
            <div class="row align-items-center">
              <div class="col-4">
                {/* modal trigger */}
                <button
                  type="button"
                  class="btn font-weight-bold"
                  data-toggle="modal"
                  data-target="#exampleModalCenter1"
                >
                  <img src={beautycircle} alt="beuty" />
                </button>
                {/* modal body*/}
                <div
                  class="modal fade"
                  id="exampleModalCenter1"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-contentm">
                    <div class="modal-header">
                      <h5 class="modal-titlem" id="exampleModalLongTitle">
                        <img src={beauty_modal} alt="beauty" />
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p class="text-modal1m">
                        Cada día son más las personas que se animan a realizarse
                        tratamientos estéticos para mejorar el aspecto de su piel.
                        <br></br> <br></br>
                        El enfoque no solo es rejuvenecer, sino también mejorar la
                        textura de la dermis y atender las imperfecciones que se
                        puedan tener.<br></br> <br></br> Es momento de empezar a
                        cuidarte y nosotras decimos cómo.
                      </p>
                      <img src={beauty_imagem} alt="beauty" />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col-2"> </div>
               <div class="col-6">
                <p>Tratamientos, productos y cuidados para el cuerpo.</p>
                <p>Faciales, masajes, belleza, TX’s corporales.</p>
              </div>
            </div>

            <div class="row row align-items-center justify-content-start no-gutters">
              <div class="col-7">
                Planes alimenticios de acuerdo a cada estilo de vida y persona.
              </div>
              <div class="col-1"> </div>
              <div class="col-4">
                {/* modal trigger */}
          <button
            type="button"
            class="btn font-weight-bold"
            data-toggle="modal"
            data-target="#exampleModalCenter2"
          >
            <img src={nutritioncircle} alt="nutrition" />
          </button>
              </div>
            </div>
             {/* modal body */}
          <div
            class="modal fade"
            id="exampleModalCenter2"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-contentm">
                <div class="modal-header">
                  <h5 class="modal-titlem" id="exampleModalLongTitle">
                    <img src={nutrition_modal} alt="nutrition" />
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p class="text-modal11">
                    La buena alimentación es una forma excelente de ayudar a tu
                    cuerpo a mantenerse fuerte y sano, prevenir enfermedades y
                    mejorar el estado de ánimo.<br></br> <br></br>
                    Nosotras te armamos una dieta balanceada, basada en tus
                    objetivos y lo que tu cuerpo necesita.{' '}
                  </p>
                  <img src={nutrition_imagem} alt="nutrition" />
                </div>
              </div>
            </div>
          </div>
             <div class="row align-items-center justify-content-start no-gutters">
              <div class="col-4 align-items-left">
                {/* modal trigger */}
                <button
                  type="button"
                  class="btn font-weight-bold"
                  data-toggle="modal"
                  data-target="#exampleModalCenter3"
                >
                  <img src={workoutcircle} alt="workout" />
                </button>
                {/* modal body */}
                  <div
                    class="modal fade"
                    id="exampleModalCenter3"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-contentm">
                        <div class="modal-header">
                          <h5 class="modal-titlem" id="exampleModalLongTitle">
                            <img src={workout_modal} alt="nutrition" />
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p class="text-modalii">
                            El ejercicio físico es bueno para todas las partes del
                            cuerpo, incluida la mente.<br></br> <br></br>
                            Ayuda a mantener tu cuerpo en un peso saludable, a producir sustancias químicas que te hagan sentir bien y reduce el riesgo de desarrollar algunas enfermedades.{' '}
                            <br></br> <br></br>Únete a los retos que tenemos preparados
                            para ti y mantente en forma.
                          </p>
                          <img src={workout_imagem} alt="workout" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              <div class="col-2">
              </div>
              <div class="col-6">
                <p>Rutinas de ejercicios para hacer desde casa.</p>
                <p>Retos para lograr el cambio que tanto deseas.</p>
              </div>
            </div>
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
              <br></br>Fernando de Alva Ixtlilxóchitl 111 A, Obrera, Cuauhtémoc, 06800 Ciudad de México, CDMX.

            </p>
          </div>
        </MobileFooter>
        <Designfootermobile>
          <div>
            <p>
              Diseñado por: <strong>JABALÍ DIGITAL MARKETING</strong>
            </p>
          </div>
        </Designfootermobile>
      </div>
    </div>
  );
}

export default HomeMobile;

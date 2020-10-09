import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  OurServices,
  IconsServices,
  TextServices,
} from '../../style/components';
import beauty from '../../images/beauty.png';
import nutrition from '../../images/nutrition.png';
import workout from '../../images/workout.png';
import workout_modal from '../../images/workout_modal.png';
import nutrition_modal from '../../images/nutrition_modal.png';
import beauty_modal from '../../images/beauty_modal.png';

function Services() {
  return (
    <div>
      <OurServices>
        <div className="servicetext">
          <h4>NUESTROS SERVICIOS</h4>
          <p>
            En nuestro cuerpo todo está conectado y si nos ponemos a trabajar en
            los buenos hábitos, no sabes lo positivo que esto puede resultar
            para un óptimo funcionamiento del mismo.
          </p>
          <p>¡Nosotras te decimos cómo cuidarte!</p>
        </div>
      </OurServices>

      <IconsServices>
        <div className="beautyicon">
          <img src={beauty} alt="beauty" />
        </div>
        <div className="nutritionicon">
          <img src={nutrition} alt="nutrition" />
        </div>
        <div className="workouticon">
          <img src={workout} alt="workout" />
        </div>
      </IconsServices>
      <TextServices>
        <div className="textbeauty">
          {/* modal trigger */}
          <button
            type="button"
            class="btn font-weight-bold"
            data-toggle="modal"
            data-target="#exampleModalCenter1"
          >
            BEAUTY
          </button>
          {/* modal body */}
          <div
            class="modal fade"
            id="exampleModalCenter1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
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
                  <p class="text-left">
                    Cada día son más las personas que se animan a realizarse
                    tratamientos estéticos para mejorar el aspecto de su piel.
                    <br></br> <br></br>
                    El enfoque no solo es rejuvenecer, sino también mejorar la
                    textura de la dermis y atender las imperfecciones que se
                    puedan tener.<br></br> <br></br> Es momento de empezar a
                    cuidarte y nosotras decimos cómo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>
            Tratamientos, productos y cuidados para el cuerpo.<br></br>Faciales,
            masajes, belleza, TX’s corporales
          </p>
        </div>
        <div className="textnutrition">
          {/* modal trigger */}
          <button
            type="button"
            class="btn font-weight-bold"
            data-toggle="modal"
            data-target="#exampleModalCenter2"
          >
            NUTRITION
          </button>
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
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
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
                  <p class="text-left">
                    La buena alimentación es una forma excelente de ayudar a tu
                    cuerpo a mantenerse fuerte y sano, prevenir enfermedades y
                    mejorar el estado de ánimo.<br></br> <br></br>
                    Nosotras te armamos una dieta balanceada, basada en tus
                    objetivos y lo que tu cuerpo necesita.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>Planes alimenticios de acuerdo a cada estilo de vida y persona.</p>
        </div>
        <div className="textnutrition">
          {/* modal trigger */}
          <button
            type="button"
            class="btn font-weight-bold"
            data-toggle="modal"
            data-target="#exampleModalCenter3"
          >
            NUTRITION
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
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
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
                  <p class="text-left">
                    El ejercicio físico es bueno para todas las partes del
                    cuerpo, incluida la mente.<br></br> <br></br>
                    Ayuda a mantener tu cuerpo en en un peso saludable, a
                    producir sustancias químicas que te hagan sentirte bien y
                    reduce el riesgo de desarrollar algunas enfermedades.{' '}
                    <br></br> <br></br>Únete a los retos que tenemos preparados
                    para ti y mantente en forma.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>
            Retos Rutinas de ejercicios para hacer desde casa.<br></br>Retos
            para lograr el cambio que tanto deseas.
          </p>
        </div>
      </TextServices>
    </div>
  );
}
export default withRouter(Services);

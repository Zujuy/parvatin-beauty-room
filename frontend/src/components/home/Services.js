import React from "react";
import { withRouter } from 'react-router-dom';
import { OurServices, IconsServices, TextServices } from "../../style/components"
import beauty from '../../images/beauty.png'
import nutrition from '../../images/nutrition.png'
import workout from '../../images/workout.png'

function Services() {
  return (
    <div>
      <OurServices>
        <div className="servicetext">
          <h4>NUESTROS SERVICIOS</h4>
          <p>En nuestro cuerpo todo está conectado y si nos ponemos a trabajar en los buenos hábitos,
        no sabes lo positivo que esto puede resultar para un óptimo funcionamiento del mismo.</p>
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
          <h4>BEAUTY</h4>
          <p>Tratamientos, productos y cuidados para el cuerpo.</p>
          <p>Faciales, masajes, belleza, TX’s corporales</p>
        </div>
        <div className="textnutrition">
          <h4>NUTRITION</h4>
          <p>Planes alimenticios
          de acuerdo a cada estilo de vida
          y persona.</p>

        </div>
        <div className="textnutrition">
          <h4>WORKOUT</h4>
          <p>Rutinas de ejercicios para hacer desde casa.</p>
          <p>Retos para lograr el cambio que tanto deseas.</p>
        </div>
      </TextServices>
    </div >
  )
}
export default withRouter(Services)
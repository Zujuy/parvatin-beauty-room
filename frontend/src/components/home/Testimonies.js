import React from "react";
import { withRouter } from 'react-router-dom';
import { Grades } from "../../style/components"
import opiniones from '../../images/opiniones.png'

function Testimonies() {
  return (
    <div>
      <Grades>
        <h4>TESTIMONIOS</h4>
        <p>En PARVATI nos preocupamos por brindarte el mejor servicio,
          es por eso que construimos este espacio para que dejes tus comentarios y sugerencias.</p>
        <img src={opiniones} alt="opiniones" />
      </Grades>
    </div>
  )
}

export default withRouter(Testimonies)
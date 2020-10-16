import React from 'react';
import { withRouter } from 'react-router-dom';
import aboutusimage from '../../images/aboutusimage.png';
import { About } from '../../style/components';

function Aboutus() {
  return (
    <About>
      <div classname="text">
        <h4>SOBRE NOSOTROS</h4>
        <p>Somos un centro de bienestar integral para hombres y mujeres.</p>
        <br></br>
        <p>
          Nuestro objetivo es{' '}
          <strong>
            inspirar a más personas a realizar un cambio de hábitos estéticos,
            alimenticios y físicos
          </strong>
          , de forma personalizada y siempre de la mano de una experta
        </p>
        <button type="button">
          <h2>CONTINUA LEYENDO ></h2>
        </button>
      </div>
      <div classname="imageabout">
        <img src={aboutusimage} alt="aboutus" />
      </div>
    </About>
  );
}
export default withRouter(Aboutus);

import React from 'react';
import { withRouter } from 'react-router-dom';
import aboutusimage from '../../images/aboutusimage.png';
import { About } from '../../style/components';

function Aboutus(props) {
  return (
    <About>
      <div classname="text">
        <h4>SOBRE NOSOTROS</h4>
        <p>Somos un centro de bienestar integral para <br></br> hombres y mujeres.
        <br></br>
          Nuestro objetivo es{' '}
          <strong>
            inspirar a más personas <br></br> a realizar un cambio de hábitos estéticos,<br></br>
            alimenticios y físicos
          </strong>
          {' '}de forma personalizada <br></br>y siempre de la mano de una experta.
        </p>
        <button type="button" onClick={props.scroll}>
          <h2>CONTINÚA LEYENDO ></h2>
        </button>
      </div>
      <div classname="imageabout">
        <img src={aboutusimage} alt="aboutus" />
      </div>
    </About>
  );
}
export default withRouter(Aboutus);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Styledfooter } from '../../style/components';
import parvatilogo2 from '../../images/parvatilogo2.png';

function Footer() {
  return (
    <div>
      <Styledfooter>
        <div className="imagelogo">
          <img src={parvatilogo2} alt="parvati" />
        </div>
        <div className="direction">
          <h3>BEAUTY ROOM SERVICE</h3>
          <p>Horario 09:00 a 19:00 hrs</p>
          <p>+55 7422 6925 | +55 5040 8099</p>
          <p>beautyroom@parvati.com.mx</p>
          <p>
            Cuauhtémoc, Fernando de Alva Ixtlilxóchitl 111A, Obrera, Cuauhtémoc,
            06800 Ciudad de México, CDMX
          </p>
        </div>
      </Styledfooter>
    </div>
  );
}

export default withRouter(Footer);

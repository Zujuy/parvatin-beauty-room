import React from 'react';
import { withRouter } from 'react-router-dom';
import { Designfooter } from '../../style/components';

function Footer2() {
  return (
    <Designfooter>
      <div>
        <p>
          Diseñado por: <strong>JÁBALI DIGITAL MARKETING</strong>
        </p>
      </div>
    </Designfooter>
  );
}

export default withRouter(Footer2);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { MobileFormStyle } from '../../style/components';
import useForm from '../../hooks/useForm';
import { postRegisterPotentialUserService } from '../../api/api';

function MobileForm(props) {
  const [form, handleInputs] = useForm();

  const handleRegister = () => {
    postRegisterPotentialUserService(form)
      .then((response) => {
        props.history.push('/');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <MobileFormStyle>
        <h2>INSCRÍBETE</h2>
        <p>
          No te pierdas nada de nuestros próximos descuentos y promociones.<br></br>
          Llena los siguientes campos.
        </p>
        <div className="mobilestyledform">
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            onChange={(e) => handleInputs(e)}
          />
          <input
            type="text"
            name="number"
            placeholder="Número de celular"
            onChange={(e) => handleInputs(e)}
          />
          <input
            type="mail"
            name="email"
            placeholder="Correo electrónico"
            onChange={(e) => handleInputs(e)}
          />
          <br></br>
          <button onClick={handleRegister}> ENVIAR </button>
          <br></br> <br></br>
        </div>
      </MobileFormStyle>
    </div>
  );
}
export default withRouter(MobileForm);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { SignForm } from '../../style/components';
import useForm from '../../hooks/useForm';
import { postRegisterPotentialUserService } from '../../api/api';
import swal from 'sweetalert2';

function Form(props) {
  const [form, handleInputs] = useForm();

  const handleRegister = () => {
    postRegisterPotentialUserService(form)
      .then((response) => {
        console.log(response);
        //props.history.push('/');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <SignForm>
        <h2>INSCRIBETE</h2>
        <p>
          No te pierdas nada de nuestros próximos descuentos y promociones,solo
          llena los siguientes campos.
        </p>
        <div className="styledform">
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
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
          <button onClick={handleRegister}> Enviar </button>
        </div>
        <br></br>
      </SignForm>
    </div>
  );
}
export default withRouter(Form);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { SignForm } from '../../style/components';
import useForm from '../../hooks/useForm';
<<<<<<< HEAD
import { postRegisterPotentialUserService } from '../../api/api';

function Form(props) {
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

=======

function Form() {
  const [form, handleInputs] = useForm();
>>>>>>> 6eff77b2e7a0247dd0364c78a6df51fcb838a722
  return (
    <div>
      <SignForm>
        <h2>INSCRIBETE</h2>
        <p>
<<<<<<< HEAD
          No te pierdas nada de nuestros próximos descuentos y promociones,solo
          llena los siguientes campos.
        </p>
        {/* div */}
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
        {/* div */}
=======
          No te pierdas nada de nuestros próximos descuentos y promociones, solo
          llena los siguientes campos.
        </p>
        <form>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre Completo"
            onChange={(e) => handleInputs(e)}
          />

          <input
            type="text"
            name="celular"
            placeholder="Número de celular"
            onChange={(e) => handleInputs(e)}
          />

          <input
            type="mail"
            name="mail"
            placeholder="Correo electrónico"
            onChange={(e) => handleInputs(e)}
          />
          <br></br>
          <input type="submit" value="ENVIAR" />
        </form>
>>>>>>> 6eff77b2e7a0247dd0364c78a6df51fcb838a722
      </SignForm>
    </div>
  );
}
export default withRouter(Form);

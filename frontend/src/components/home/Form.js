import React from "react"
import { withRouter } from 'react-router-dom';
import { SignForm } from '../../style/components'
import useForm from '../../hooks/useForm'

function Form() {

  const [form, handleInputs] = useForm()
  return (
    <div>
      <SignForm>
        <h2>INSCRIBETE</h2>
        <p>No te pierdas nada de nuestros próximos descuentos y promociones,solo llena los siguientes campos.</p>
        <form>

          <input type="text" name="nombre" placeholder="Nombre Completo" onChange={e => handleInputs(e)} />

          <input type="text" name="celular" placeholder="Número de celular" onChange={e => handleInputs(e)} />

          <input type="mail" name="mail" placeholder="Correo electrónico" onChange={e => handleInputs(e)} />
          <br></br>
          <input type="submit" value="Enviar" />
        </form>
      </SignForm>
    </div>
  )
}
export default withRouter(Form)
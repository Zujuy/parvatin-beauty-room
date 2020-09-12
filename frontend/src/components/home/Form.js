import React from "react"
import { withRouter } from 'react-router-dom';
import { SignForm } from '../../style/components'

function Form() {
  return (
    <div>
      <SignForm>
        <h4>INSCRIBETE</h4>
        <p>No te pierdas nada de nuestros próximos descuentos y promociones,solo llena los siguientes campos.</p>
        <form>

          <input type="text" value="Nombre Completo" />

          <input type="text" value="Número de celular" />

          <input type="mail" value="Correo electrónico" />
          <br></br>
          <input type="submit" value="Enviar" />
        </form>
      </SignForm>
    </div>
  )
}
export default withRouter(Form)
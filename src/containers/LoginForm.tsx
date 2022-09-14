import React from 'react'

const LoginForm = () => {
  return (
    <div className="LoginForm">
 
    
        <section className="main">

          <div className="main_login_container">

        <div className="login_container">
            <p className='bienvenidos'>¡Bienvenidos!</p>
            <p className='mensaje'>¡Registrate y has tu primer pedido!</p>
            <img src="assets/Icons/login/Grupo 348.svg" alt=""/>

            <div className="login_inputs">

                <input type="text" placeholder="Ingresa tu correo o teléfono"/>
                <input type="text" placeholder="Contraseña"/>
                <a>¿Has olvidado tu contraseña?</a>

                <div className="login_sign_in">
                
                    <button>Sign In</button>
                </div>
        
                <div className="login_iniciar_sesion">
                        <button className="iniciar_sesion">Iniciar Sesion</button>
                        <button className="button_registrar">Registrarse</button>
                </div>
          </div>
         </div>

         </div>
        </section>
    </div>
  )
}

export default LoginForm
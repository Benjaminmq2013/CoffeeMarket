import users from '../../pages/users'
import react from 'react'
import React from 'react'

const NavUsers = () => {
  return (
    <div className='Section_navbar_users'>
        <div className='navbar_users'>
            <img src="/assets/Icons/back_button_orange.svg" alt="" />
            <p>Volver al inicio</p>
        </div>
        <div className='Users_existentes'>
            <p>Usuarios Existentes</p>
        </div>
        <div className='Input_search'>
            <input type="text" placeholder='Busca un usuario'/>
            <img src="/assets/Icons/search_icon.svg" alt="" />
        </div>
        <div className='Users_cliente-vendedor'>
            <img src="/assets/Icons/filter_icon.svg" alt="" />
            <button>Todos</button>
        </div>

    </div> 
  )
}

export default NavUsers
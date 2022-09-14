import React from 'react'

const MenuAdministracion = () => {
  return (
    <div>
        <div className='menu_administrar-container'>
            <div className='container_items-administrar'>

            <div className='container_items-usuario-productos'>

            <div className='container_usuarios'>
                <img className='icon_administrar-container' src="/assets/Icons/User_edit.svg" alt="" />
                <p className='text_administrar-container'>Usuarios</p>
            </div>

            <div className='container_productos'>
                <img className='icon_administrar-container' src="/assets/Icons/box.svg" alt="" />
                <p className='text_administrar-container'>Productos</p>
            </div>

            <div className='container_ordenes'>
                <img className='icon_administrar-container' src="/assets/Icons/list_notes_icon.svg" alt="" />
                <p className='text_administrar-container'>Ordenes</p>
            </div>

            <div className='container_nuevo-lanzamiento'>
                <img className='icon_administrar-container' src="/assets/Icons/add_icon.svg" alt="" />
                <p className='text_administrar-container'>Nuevo Lanzamiento</p>
            </div>

            </div>

            <div className='container-ventas-mensajes'>

            <div className='container_ventas'>
                <img className='icon_administrar-container' src="/assets/Icons/shop.svg" alt="" />
                <p className='text_administrar-container'>Ventas</p>
            </div>

            <div className='container_mensajes'>
                <img className='icon_administrar-container' src="/assets/Icons/email.svg" alt="" />
                <p className='text_administrar-container'>Mensajes</p>
            </div>

            </div>

            </div>


        </div>
    </div>
  )
}

export default MenuAdministracion
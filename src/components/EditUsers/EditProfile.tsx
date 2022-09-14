import React from 'react'

const EditProfile = () => {
  return (
    <div>
                <section className='EditProfile-main_container'>

            <div className='EditProfile-edit_profile_container'>

                <div className='backToHome'>
                    <img src="../assets/Icons/back_button_orange.svg" alt="" />
                    <a href=''>Volver al inicio</a>
                   

                </div>

                <span className='edit'><p>Editar mi perfil</p></span>

                <div className='EditProfile-container'>

                <div className='edit_profile'>
                    <picture className='image'>
                        <img src="../assets/Images/users/profile1.png" alt="" />
                        
                        <span className='icon_edit'> 
                        <img src="../assets/Icons/edit_profile.svg" alt="" /> 
                        <a href="">Editar</a>
                        </span>

                    </picture>

                </div>

                <div className='edit_information_container'> 
                <div className='items_information'>

                <div className='item_name'>

                    <label className='label1' htmlFor="">Mi nombre</label>
                    <span className='item_name-input'>
                    <input type="text" placeholder='Carlos Alfredo Aparicio Ventura' />
                    <img src="../assets/Icons/edit-icon.svg" alt="" />
                    <a href=''>Editar</a>
                    </span>

                </div>

                <div className='item_tel'>

                    <label className='label2' htmlFor="">Teléfono</label>
                    <span className='item_name-input'>
                    <input type="text" placeholder='+503 555-555' />
                    <img src="../assets/Icons/edit-icon.svg" alt="" />
                    <a>Editar</a>
                    </span>

                </div>

                <div className='item_address'>

                    <label className='label3' htmlFor="">Dirección de envió</label>
                    <span className='item_name-input'>
                    <input type="text" placeholder='Carlos Alfredo Aparicio Ventura' />
                    <img src="../assets/Icons/edit-icon.svg" alt="" />
                    <a href=''>Editar</a>
                    </span>
                </div>

                </div>

                <div className='new_address_container'>
                    <img src="../assets/Icons/add.svg" alt="" />
                    <a className='new_address' href="">Añadir dirección adicional</a>

                </div>

                <div className='item_email'>

                    <label className='label4' htmlFor="">Correo:</label>
                    <span className='item_name-input'>
                    <input type="text" placeholder='alfredoaparecio503@gmail.com' />
                    <img src="../assets/Icons/edit-icon.svg" alt="" />
                    <a href=''>Editar</a>
                    </span>
                </div>
                
                <div className='button_aceptar'>
   
                    <button className='aceptar'>Aceptar
                    </button>
                </div>

                
                </div>

                
                </div>


            </div>

        </section>

    </div>
  )
}

export default EditProfile
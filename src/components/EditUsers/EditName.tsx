import React from 'react'

const EditName = () => {
  return (
    <div>
        <div className='MainContainer1'>

                <div className='nav_back'>
                    <img src="../assets/Icons/back_button_orange.svg" alt="" />
                    <a href=''>Volver al inicio</a>
                   

                </div>

                <span className='text_edit'><p>Editar mi perfil</p></span>

                <div className='container_name-correo'>

                <div className='container_image'>
                    <picture className='image1'>
                        <img className='img1' src="../assets/Images/users/profile1.png" alt="" />
                        
                        <span className='icon_edit1'> 
                        <img src="../assets/Icons/edit_profile.svg" alt="" /> 
                        <a href="">Editar</a>
                        </span>

                </picture>
                </div>
                <div className='names_buttons'> 
                <div className='title_cambiar_name'>
                    <img src="../assets/Icons/about.svg" alt="" />
                    <p>Cambiar mi nombre y correo</p>
                </div>

                <div className='names_container'>

                <div className='Item_name'>

                    <label className='label1' htmlFor="">Nombre</label>
                    <span className='item_name-input'>
                    <input type="text" placeholder='Carlos Alfredo' />
                    
                    </span>

                </div>

                <div className='Item_apellido'>

                    <label className='label2' htmlFor="">Apellidos</label>
                    <span className='item_name-input'>
                    <input type="text" placeholder='Aparicio Ventura' />
                    </span>

                </div>

                <div className='Item_correo'>

                    <label className='label3' htmlFor="">Correo</label>
                    <span className='item_name-input'>
                    <input type="text" placeholder='alfredoaparicio503@gmail.com' />
                    
                    </span>
                </div>

                </div>
                
                <div className='Buttons'>
                    <button className='guardar'>Guardar</button>
                    <button className='cancelar'>Cancelar</button>
                </div>

                
                </div>


                </div>
            
        </div>

    </div>
  )
}

export default EditName
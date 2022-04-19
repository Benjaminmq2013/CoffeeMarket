import React from 'react'

const PersonalData = () => {
  return (
    <div>
        <div className='personal_data-container'>
            
            <div className='items_container-informacion'>

            <div className='informacion_personal-icon-text'>
                <picture className='icon_informacion-personal'>
                    <img src="/assets/Icons/about.svg" alt="" />
                </picture>
                <p className='text_informacion_personal-p'>información personal</p>

            </div>
            <div className='inputs_informacion_personal-container'>

                <div className='input_informacion-container'>
                <label className='label_informacion-personal' htmlFor="">Nombre:</label>
                <input className='input_informacion-personal' type="text" placeholder='Calle, casa, piso'/>
                </div>

                <div className='input_informacion-container'>
                <label className='label_informacion-personal' htmlFor="">Apellidos:</label>
                <input className='input_informacion-personal' type="text" placeholder='Calle, casa, piso'/>
                </div>

                <div className='input_informacion-container'>
                <label className='label_informacion-personal' htmlFor="">Teléfono:</label>
                <input className='input_informacion-personal' type="text" placeholder='Calle, casa, piso'/>
                </div>


            </div>
            <div className='informacion_personal_button-container'>
                 <p className='description_informacion-p'>Datos de la persona que recibirá el producto utilizaremos esta informacion para contactarte</p>
                 <button className='informacion_personal_button-continuar'>Continuar</button>
                 <p className='necesitas_ayuda_llamenos-p'>¿Necesitas ayuda? <a className='contacto_llamenos-a' href="">¡Llámanos!</a> </p>

             </div>

            </div>
        </div>

    </div>
  )
}

export default PersonalData
import React from 'react'

const ShippingData = () => {
  return (
    <div>
        <div className='container_seccion_informacion-personal '>
            <img className='icon_seccion-info' src="/assets/Icons/grupo 583.svg" alt="" />
            <p className='text_seccion-info'>Información personal y de envío</p>
        </div>
        <main className='info_personal_envio-container'>

            <div className='items_container-info'>

            <div className='info_personal_envio-tittle'>
                <picture className='icon_envio-tittle'>
                    <img className='' src="/assets/Icons/location.svg" alt="" />
                </picture>
                <p className='tittle_info-personal'>Información personal y de envio</p>
        
            </div>

            <div className='datos_info_personal-container'>
                
                <div className='input_info-container'>
                <label className='label_info-personal' htmlFor="">Dirección</label>
                <input className='input_info-personal' type="text" placeholder='Calle, casa, piso'/>
                </div>

                <div className='input_info-container'>
                <label className='label_info-personal' htmlFor="">Dirección (continuación)</label>
                <input className='input_info-personal' type="text" placeholder='Aparicio Ventura' />
                </div>

                <div className='input_info-container'>
                <label className='label_info-personal' htmlFor="">Código postal</label>
                <input className='input_info-personal' type="text" placeholder='Ej: 1510' />
                </div>

                <div className='input_info-container'>
                <label className='label_info-personal' htmlFor="">Ciudad</label>
                <select className='input_info-personal' name="" id="" placeholder='Ej: San salvador'></select>
                </div>

                <div className='input_info-container'>
                <label className='label_info-personal' htmlFor="">Departamento/Municipio</label>
                <select className='input_info-personal' name="" id="" >
                    <option value="">Ahuachapan</option>
                    <option value="">Santa Ana</option>
                    <option value="">Sonsonate</option>
                    <option value="">La Libertad</option>
                    <option value="">Chalatenango</option>
                    <option value="">San Salvador</option>
                    <option value="">Cuzcatlan</option>
                    <option value="">La Paz</option>
                    <option value="">San Vicente</option>
                    <option value="">Usulutan</option>
                    <option value="">San Miguel</option>
                    <option value="">Morazan</option>
                    <option value="">Cabañas</option>
                    <option value="">La Union</option>
                </select>
                </div>

             </div>

             <div className='info_personal_button-container'>
                 <p className='direccion_enviar-p'>Direccion a la que enviaremos el producto</p>
                 <button className='info_personal_button-continuar'>Continuar</button>
                 <p className='necesitas_ayuda-p'>¿Necesitas ayuda? <a className='contacto-a' href="">¡Llámanos!</a> </p>

             </div>

            </div>

        </main>
    </div>
  )
}

export default ShippingData









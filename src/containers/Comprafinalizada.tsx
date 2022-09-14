import React from 'react'

const Comprafinalizada = () => {
  return (
    <div>
        <div className='compra_finalizada-container'>

            <div className='container_compra-realizada'>

            <picture className='icon_compra-realizada'>
                <img src="/assets/Icons/compra_realizada.svg" alt="" />
            </picture>

            <p className='compra_realizada-text'>¡Gracias por tu compra!</p>

            <p className='description_compra-text'>¡Tu orden está siendo verificada!</p>
           
            <p className='estado_compra-text'>puedes ver el estado de tu orden haciendo <a className='estado_compra-a' href="">click aquí </a></p>

            <p className='acceder_ordenes-text'> o accede a</p>

            <picture className='icon-mis_ordenes'>
                <img src="" alt="" />
                <a className='mis_ordenes-a' href="">Mis ordenes</a>
            </picture>

            </div>
        </div>

    </div>
  )
}

export default Comprafinalizada
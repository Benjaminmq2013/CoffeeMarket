import React from 'react'
import proximamente from '../styles/proximamente.module.css'

const Proximamente = () =>{ 

  return (
    
    <section className={proximamente.main_lanzamiento}>
      
    <span className={proximamente.titulo_lanzamiento}>¡Nuestro próximo lanzamiento!</span>
        
  
    <div className={proximamente.proximo_product}>
      
        <div className={proximamente.product_description}>
        <figure className={proximamente.product_image}>
  
              <img src="/assets/Images/Cojulte v2.JPG"/>
          
        </figure>

        <div className={proximamente.description_product}>
          
          <span className={proximamente.name_product}><p>Café cojute 400gr</p> </span>
          <span className={proximamente.espacio_hr}> <hr className={proximamente.hr_1}/> </span>

          <div className={proximamente.descriptions}>

          <span className={proximamente.description1}><p>Cuzcatleco y catisic</p></span>
          <span className={proximamente.description2}><p>Achocolatado, frutales y forestales</p></span>
          <span className={proximamente.description3}><p>Altura: 700-900 </p></span>

          </div>
          

        </div>  

        </div>

        <div className={proximamente.oferta_lanzamiento}>
          
          <div className={proximamente.lanzamiento_container}>
            <span className={proximamente.oferta_lanzamiento_text}> <p>Próximamente</p></span>
            <span className={proximamente.oferta_lanzamiento_text2}><p>Aprovecha nuestra oferta de lanzamiento en:</p></span>
            <span className={proximamente.espacio_hr2}><hr className={proximamente.hr_proximamente}/></span>

            <div className={proximamente.contador_lanzamiento}>

                <span className={proximamente.dias}>

                    <p className={proximamente.numbers}>10</p>
                    <hr/>
                    <p className={proximamente.text}>Días</p>

                </span>

                <span className={proximamente.horas}>

                    <p className={proximamente.numbers}>9</p>
                    <hr/>
                    <p className={proximamente.text}>Horas</p>

                </span>

                <span className={proximamente.minutos}>

                    <p className={proximamente.numbers}>15</p>
                    <hr/>
                    <p className={proximamente.text}>Minutos</p>

                </span>

                <span className={proximamente.segundos}> 

                    <p className={proximamente.numbers}>54</p>
                    <hr/>
                    <p className={proximamente.text}>Segundos</p>

                </span>               

            </div>
          </div>

          <div className={proximamente.decoration1_movil}></div>
          <div className={proximamente.decoration2_movil}></div>
            
        
        
        </div>
    
    </div>

    <span className={proximamente.mas_informacion}>¿Necesitas más información? <a className={proximamente.contactanos} href="https://wa.me/50377297675"> ¡Contáctanos! </a> </span>
           
      <div className={proximamente.decoration1}></div>
      <div className={proximamente.decoration2}></div>

    </section>
    
  )
}

export default Proximamente
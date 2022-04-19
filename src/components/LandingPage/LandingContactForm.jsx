import React from 'react'

const LandingContactForm = () => {
  return (
    <>
      <form action="mailto:coffeemarket503@gmail.com" className="LandingContactForm" method="POST" encType="multipart/form-data" name="EmailForm">
        
        <div className="form_row">
            <div className="contact_form-item">
              <span className="form_item-title">Nombre</span> 
              <input className="Form-Input" type="text" name="Nombre" placeholder="Ej: Carlos Alfredo" required/>
            </div>
            <div className="contact_form-item">
              <span className="form_item-title">Apellido</span> 
              <input type="text"  className="Form-Input" name="Apellido" placeholder="Ej: Aparicio Ventura"/>
            </div>
        </div>

        <div className="form_row">
            <div className="contact_form-item">
              <span className="form_item-title">Email</span> 
              <input className="Form-Input" type="text" name="Nombre" placeholder="Ej: carlperez@example.com"/>
            </div>
            <div className="contact_form-item">
              <span className="form_item-title">Teléfono</span> 
              <input type="text"  className="Form-Input" name="Apellido" placeholder="Ej: +503 555-555" required/>
            </div>
        </div>
        
        <span className="form_item-title">Mensaje:</span> 
        <textarea className="message-area" name="ContactCommentt" rows="1" placeholder="Escribe tu mensaje" cols="" ></textarea> <br />
        <input className="form_submit-btn" type="submit" value="Enviar Mensaje" />
        
      </form>
    </>
  )
}

export default LandingContactForm
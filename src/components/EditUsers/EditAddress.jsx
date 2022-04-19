import editaddress from "../../pages/account/editaddress";
import React from 'react'

const EditAddress = () => {
  return (
    <div>
        <section className="edit_address_container">
             <div className="nav_image_profile">
                 <div className="edit_address-nav_volver">


                     <img src="/assets/Icons/back_button_orange.svg" alt="" />
                     <a href="">Volver</a>

                 </div>
                 <div className="edit_address-profile_name">
                    <img src="/assets/Images/users/Profile1.png" alt="" />
                    <p className="Name">Carlos Alfredo</p>
                 </div>
             </div>
             
             <div className="address_profile_container">
                 <div className="editar_mi_direccion">
                     <img src="/assets/Icons/location.svg" alt="" />
                     <p className="editar_address_text">Editar mi dirección 1</p>
                 </div>

                 <div className="items_address_data_container">

                 <div className="item_address_data">
                    <label className="label_address" htmlFor="">Dirección</label>
                    <input className="input_address" type="text" />
                 </div>

                 <div className="item_address_data2">
                    <label className="label_address" htmlFor="">Dirección (continuación)</label>
                    <input className="input_address" type="text" />
                 </div>

                 <div className="item_codigo_data">
                    <label className="label_address" htmlFor="">Código postal</label>
                    <input className="input_address" type="text" />
                 </div>

                 <div className="item_ciudad_data">
                    <label className="label_address" htmlFor="">Ciudad</label>
                    <input className="input_address" type="text" />
                 </div>

                 <div className="item_departamento_data">
                    <label className="label_address" htmlFor="">Departamento/Municipio</label>
                    <input className="input_address" type="text" />
                 </div>


                 </div>
                 <div className="address_profile_buttons">
                     <button className="address_button-guardar">Guardar</button>
                     <button className="address_button-cancelar">Cancelar</button>
                 </div>

             </div>




        </section>
    </div>
  )
}

export default EditAddress
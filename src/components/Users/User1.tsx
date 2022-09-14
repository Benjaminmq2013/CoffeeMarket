import users from "../../pages/users";
import React from 'react'

const User1 = () => {
  return (
    <div className="Section_User1-container">
        <picture className="Image_profile-user">
                <img src="/assets/Images/users/user-image.png" alt="" />
        </picture>

        <table className="Table_users-user1">
            
            <tr>
                <th className="Name_user-1"><img src="" alt="" />Andres Alvarado Ventura Vernazza</th>
                
                <div className="users_data-columns">

                <div className="users_data-information">

                <td className="td_number-desktop">+503 72567890</td>
                <td className="td_address">San salvador, San salvador, calle 1, edificio 5 </td>
                <td className="td_rol">Vendedor</td>
                <td className="td_number-mobile">+503 72567909</td>

                </div>

                <div className="icons_table_users">
                <td className="td_editar-icon"><img src="/assets/Icons/edit-icon.svg" alt="" />editar</td>
                <td className="td_eliminar-icon"><img src="assets/Icons/eliminar-icon.svg" alt="" />Eliminar</td>
                </div>
                </div>
            </tr>
        </table>
        <div className="Button_edit-users">
            <button className="Edit-user1">!</button>
        </div>
    </div>
  )
}

export default User1
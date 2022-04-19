import React from "react"

const Cart = () => {
  return (
    <div>
        <div className="container_carrito_compras">
            <div className="carrito_compras-nav">               

                <div className="button_close-carrito">
                
                </div>
            </div>

            <div className="container_carrito_compras-products">
                <p> Carrito Vacío</p>

                <picture className="image-empty-carrito">
                <img src="/assets/Images/empty-cart.png" alt="" />
                </picture>
                <div className="text_empty-cart">
                <p>¡Aún no has añadido ningún artículo! Visita nuestro catálogo</p>
                </div>
                <a className="button_verCatalogo" href="#store"> Ver Catálogo</a>
            </div>


        </div>


    </div>
  )
}

export default Cart
import React, { useContext } from 'react'
import { productList } from "../../db/productList"
import { AppContext } from '../../context/productsContext'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const ProductItemDetails = () => {
    const [ products , setProducts ] = useContext(AppContext)
    const defaultProduct = productList[0]
  return (
    <>
      <section className="main_description_container">
        <div className="main_details">
          <hr />
          <h1>Detalles:</h1>
          <hr />

          <div className="main_details_items">
            <div>
              <div>
                <img src="assets/Icons/product-details/peso.svg" alt="" />
                <span>Peso:</span>
              </div>
              <span className="text">
                {products.weight || defaultProduct.weight}Kg
              </span>
            </div>

            <div>
              <div>
                <img src="assets/Icons/product-details/acidez.svg" alt="" />
                <span>Acidez: </span>
              </div>
              <span className="text">
                
                {products.acidity || defaultProduct.acidity}
              </span>
            </div>

            <div>
              <div>
                <img src="assets/Icons/product-details/altura.svg" alt="" />
                <span>Altura: </span>
              </div>
              <span className="text">
                {products.height || defaultProduct.height}
              </span>
            </div>

            <div>
              <div>
                <img
                  src="assets/Icons/product-details/nivel tostado.svg"
                  alt=""
                />
                <span>Nivel Tostado: </span>
              </div>
              <span className="text">
                {products.toasted_level || defaultProduct.toasted_level}
              </span>
            </div>

            <div>
              <div>
                <img
                  src="assets/Icons/product-details/altura descriptiva.svg"
                  alt=""
                />
                <span>Altura Descriptiva:</span>
              </div>
              <span className="text">
                {products.descriptive_height ||
                  defaultProduct.descriptive_height}
              </span>
            </div>

            <div>
              <div>
                <img src="assets/Icons/product-details/marca.svg" alt="" />
                <span>Marca: </span>
              </div>
              <span className="text">
                
                {products.brand || defaultProduct.brand}
              </span>
            </div>

            <div>
              <div>
                <img src="assets/Icons/product-details/forma.svg" alt="" />
                <span>Forma: </span>
              </div>
              <span className="text">
                
                {products.form || defaultProduct.form}
              </span>
            </div>

            <div>
              <div>
                <img
                  src="assets/Icons/product-details/departamento.svg"
                  alt=""
                />
                <span>Departamento: </span>
              </div>
              <span className="text">
                
                {products.department || defaultProduct.department}
              </span>
            </div>

            <div>
              <div>
                <img src="assets/Icons/product-details/municipio.svg" alt="" />
                <span>Municipio: </span>
              </div>
              <span className="text">
                
                {products.municipality || defaultProduct.municipality}
              </span>
            </div>

            <div>
              <div>
                <img src="assets/Icons/product-details/zona.svg" alt="" />
                <span>Zona: </span>
              </div>
              <span className="text">
                
                {products.zone || defaultProduct.zone}
              </span>
            </div>

            <div>
              <div>
                <img
                  src="assets/Icons/product-details/certificaciones.svg"
                  alt=""
                />
                <span>Certificaciones: </span>
              </div>
              <span className="text">
                
                {products.certifications || defaultProduct.certifications}
              </span>
            </div>

            <div>
              <div>
                <img
                  src="assets/Icons/product-details/cooperativa.svg"
                  alt=""
                />
                <span>Cooperativa:</span>
              </div>
              <span className="text">
                {products.cooperative || defaultProduct.cooperative}
              </span>
            </div>

            <div>
              <div>
                <img
                  src="assets/Icons/product-details/tipos mezclas.svg"
                  alt=""
                />
                <span>Tipos Mezclas: </span>
              </div>
              <span className="text">
                
                {products.mix || defaultProduct.mix}
              </span>
            </div>
          </div>
          <div className="main_more">
            <p>ver menos</p>
            <input type="checkbox" className="checkbox" id="check" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductItemDetails;

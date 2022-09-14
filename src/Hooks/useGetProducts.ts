import React, { useState, useEffect } from 'react'
const axios = require('axios');
import { productList } from '../db/productList';

const useGetProducts = () => {
    const [ products, setProducts ] = useState([])

    useEffect(()=> {
        setProducts(productList)
    }, [])

    return (
        products
    )
}

export default useGetProducts;
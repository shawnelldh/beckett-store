import Button fro 'react-bootstrap.Button'
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import {getProductData  } from '../productsStore';

function CartProduct(props)  {
   const cart = useContext(CartContext);
   const id = props.id;
   const qauntity = props.id;
   const qauntty = props.qauntity;
   const productData = getProductData(id);
   
   return (
    <>
    <h3>{productData.title}</h3>
    <p>{quantity}. total</p>
    <p>${(qauntity * productData.price) .toFixed(2)}</p>
            




   )



}
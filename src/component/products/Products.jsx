import React from 'react';
import shoe from './Product/images/shoes1.jpg';
import mac from './Product/images/macbook.jpg';
import nik from './Product/images/nike.jpg';
import keyb from './Product/images/keyboard.jpg';
import pend from './Product/images/pendrive.jpg';
import prin from './Product/images/printer.jpg';
import {Grid }  from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './productsStyles';
const Products = ({ products , onAddToCart }) =>{
  const classes = useStyles();
  /*onst products = [
    {id:1 , name:"shoes", description:"Running shoes..", 
    price:'$5',images: shoe},
    {id:2, name:"macbook", description:"apple mac book",
    price:'$10',images: mac },
    {id:3,name:"nike" ,description:"nike shoe...",
     price:'$7', images: nik },
     {id:4,name:"keyboard", description:"Keyboard...",
     price:'$2', images: keyb },
     {id:5,name:"pendrive", description:"pendrive...",
     price:'$1', images:pend },
     {id:6,name:"printer" ,description:"printer...",
     price:'$6', images:prin },

    ];*/
  
  return(
  <>
    
    <main className = { classes.content}>
    <div className = {classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {
          products.map((product)=>{
           return <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
             <Product product = {product} onAddToCart = {onAddToCart}/>
            </Grid>
          })
        }
      </Grid>
    </main>
    </>
  );
}

export default Products;
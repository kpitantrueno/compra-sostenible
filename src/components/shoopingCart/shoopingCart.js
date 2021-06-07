import React from 'react'
import ItemShoopingCart from '../itemShopingCart/itemShopingCart'
import { useState } from 'react'
import './shopingCart.css';


export default function ShoopingCart(props) {




    return (

        <div className='container'>

         

            <div className='shopingcart row '>
                {
                    
                    props.cosas.map(product => <div  className='col-12 mt-5'><ItemShoopingCart productData={product} addShopingCart={props.purchase} deleteItem={props.deleteItem} /></div> )
                }

                


            </div>

                    <button onClick={props.savePurchase} className='btn btn-secondary col-4'>Guardar compra</button>
                    <button onClick={props.loadPurchase} className='btn btn-secondary col-4'>Cargar ultima compra</button>
                    <button onClick={props.deleteAll} className='btn btn-secondary col-4'>Eliminar compra</button>
                
           
            
        </div>



    )

   
}
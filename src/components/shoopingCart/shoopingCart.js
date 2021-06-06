import React from 'react'
import ItemShoopingCart from '../itemShopingCart/itemShopingCart'
import { useState } from 'react'


export default function ShoopingCart(props) {




    return (

        <div className='container'>

            <div className='container row'>
                {

                    props.cosas.map(product => <div  className='col-4'><ItemShoopingCart productData={product} addShopingCart={props.purchase} deleteItem={props.deleteItem} /></div> )
                }

            </div>

            <div className='container col-12 d-flex flex-row justify-content-evenly mb-4'>
                
                    <button onClick={props.savePurchase} className='btn btn-secondary'>Guardar compra</button>
                    <button onClick={props.loadPurchase} className='btn btn-secondary'>Cargar ultima compra</button>
                    <button onClick={props.deleteAll} className='btn btn-secondary'>Eliminar compra</button>
                
            </div>
            
        </div>



    )

   
}
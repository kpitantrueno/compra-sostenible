import React from 'react'
import ItemShoopingCart from '../itemShopingCart/itemShopingCart'
import { useState } from 'react'


export default function ShoopingCart(props) {




    return (

        <div className='container'>
            <div className='col-12'>
                
                    <button onClick={props.savePurchase} className='btn btn-primary'>Guardar compra</button>
                    <button onClick={props.loadPurchase} className='btn btn-primary'>Cargar ultima compra</button>
                    <button onClick={props.deleteAll} className='btn btn-primary'>Eliminar compra</button>
                
            </div>
            <div className='row'>
                {

                    props.cosas.map(product => <div  className='col-4'><ItemShoopingCart productData={product} addShopingCart={props.purchase} deleteItem={props.deleteItem} /></div> )
                }

            </div>
        </div>



    )

   
}
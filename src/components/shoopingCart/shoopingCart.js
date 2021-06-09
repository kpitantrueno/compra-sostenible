import React from 'react'
import ItemShoopingCart from '../itemShopingCart/itemShopingCart'
import { useState } from 'react'
import './shopingCart.css';


export default function ShoopingCart(props) {














    


    return (

        <div className=''>

            <div className=' col-12'>
                <button  onClick={props.savePurchase}>Guardar</button>
                <button  onClick={props.loadPurchase}>Cargar</button>
                <button  onClick={props.deleteAll}>Eliminar</button>
            </div>


            <div className=' col-12'>



                {
                    props.cosas.map(product => <ItemShoopingCart productData={product} addShopingCart={props.purchase} deleteItem={props.deleteItem} />)
                }



            </div>


        </div>



    )


}
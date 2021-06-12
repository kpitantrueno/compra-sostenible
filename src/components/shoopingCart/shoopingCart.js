import React from 'react'
import ItemShoopingCart from '../itemShopingCart/itemShopingCart'
import { useState } from 'react'
import './shopingCart.css';


export default function ShoopingCart(props) {

    return (

        <div className='container'>

            <div className='col-12 d-flex justify-content-around'>
                <button className="m-1 btn green" onClick={props.savePurchase}>Guardar</button>
                <button className="m-1 btn green" onClick={props.loadPurchase}>Cargar</button>
                <button className="m-1 btn green" onClick={props.deleteAll}>Eliminar</button>
            </div>


            <div className=' col-12'>



                {
                    props.cosas.map(product => <ItemShoopingCart productData={product} addShopingCart={props.purchase} deleteItem={props.deleteItem} />)
                }



            </div>


        </div>



    )


}
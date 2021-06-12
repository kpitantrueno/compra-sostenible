import React from 'react'
import ItemShoopingCart from '../itemShopingCart/itemShopingCart'
import { useState } from 'react'
import './shopingCart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ShoopingCart(props) {






   












    return (

        <div className='container'>

            <div className='col-12 d-flex justify-content-around border border-success mt-2 p-1'>
                <button className="m-1 btn green shadow" onClick={props.savePurchase}>Guardar</button>
                <button className="m-1 btn green shadow" onClick={props.loadPurchase}>Cargar</button>
                <button className="m-1 btn green shadow" onClick={props.deleteAll}>Eliminar</button>
            </div>


            <div className=' col-12'>



                {
                    props.cosas.map(product => <ItemShoopingCart productData={product} addShopingCart={props.purchase} deleteItem={props.deleteItem}  advice={props.advice} />)
                }



            </div>

           


        </div>



    )


}
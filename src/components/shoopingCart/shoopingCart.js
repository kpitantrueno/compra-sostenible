import React from 'react'
import ItemShoopingCart from '../itemShopingCart/itemShopingCart'
import { useState } from 'react'
import './shopingCart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ShoopingCart(props) {

    return (

        <div className='container'>
            <h3 className="text text-center col-12 mt-3">Carrito</h3>

            <div className='col-12 d-flex justify-content-around border border-success mt-3 p-1'>
                <button className="m-1 btn green shadow" onClick={props.savePurchase}>Guardar</button>
                <button className="m-1 btn green shadow" onClick={props.loadPurchase}>Cargar</button>
                <button className="m-1 btn green shadow" onClick={props.deleteAll}>Eliminar</button>
            </div>

            <div className=' col-12'>

                {
                    props.products.map(product => <ItemShoopingCart productData={product} updateCountProduct={props.updateCountProduct} deleteItem={props.deleteItem} notify={props.notify} />)
                }

            </div>

        </div>

    )

}
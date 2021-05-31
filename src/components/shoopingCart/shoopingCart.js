import React from 'react'
import ItemShoopingCart from '../itemShopingCart/itemShopingCart'
import { useState } from 'react'


export default function ShoopingCart(props) {

   
    console.log(props.cosas + 'estos son los props de shoping')

    return (


        <div className='container'>
            <div className='row'>
                {

                    props.cosas.map(product => <div  className='col-4'><ItemShoopingCart productData={product} addShopingCart={props.purchase} deleteItem={props.deleteItem} /></div> )
                }

            </div>
        </div>



    )

   


}
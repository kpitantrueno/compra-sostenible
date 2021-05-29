import React from 'react'
import ItemShoopingCart from '../itemShopingCart/itemShopingCart'



export default function ShoopingCart(props) {

    console.log(props)

    return (

        <div className='container'>
            <div className='row'>
                {

                    props.cosas.map(product => <div  className='col-4'><ItemShoopingCart productData={product} /></div> )
                }

            </div>
        </div>



    )

    /*
        return (
    
            <div className='listProducts'>
    
                {
                    props.cosas.map(product => <button >{product}</button>)
                }
    
            </div>
    
        )
    */







}
import { div } from 'prelude-ls'
import React from 'react'






export default function ListProducts(props) {

    let products = ['leche', 'cafe', 'azucar']

    return (

        <div className='listProducts'>

            {
                products.map(product => <button className='col-12' onClick={e => props.changeState(product)}>{product}</button>)
            }

        </div>

    )




}
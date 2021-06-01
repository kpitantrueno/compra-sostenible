import { div } from 'prelude-ls'
import React from 'react'




export default function ListProducts(props) {

    let json = [

        { name: 'leche', count: 0, CO2level: 'high' },
        { name: 'azucar', count: 0, CO2level: 'medium' },
        { name: 'cafe', count: 0, CO2level: 'low' },
        { name: 'yogurt', count: 0, CO2level: 'low' }

    ]




    return (

        <div>
            <div className='listProducts'>

                {
                    json.map(product => <button className='col-12' onClick={e => props.changeState(product)}>{product.name}</button>)
                }

            </div>


            <div className='crudPanel'>
                <button className='btn btn-primary'>+</button>
                <button className='btn btn-primary'>-</button>
            </div>
        </div>
    )




}
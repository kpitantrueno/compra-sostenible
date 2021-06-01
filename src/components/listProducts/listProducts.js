import { div } from 'prelude-ls'
import React from 'react'
import { useState, useEffect } from 'react'




export default function ListProducts(props) {

    const [state, setState] = useState([])

    /*

    let json = [

        { name: 'leche', count: 0, CO2level: 'high' },
        { name: 'azucar', count: 0, CO2level: 'medium' },
        { name: 'cafe', count: 0, CO2level: 'low' },
        { name: 'yogurt', count: 0, CO2level: 'low' }

    ]
*/




    useEffect(() => {

        fetch('products.json')
            .then((response) => response.json())
            .then(data => setState(data));

        console.log(state)
    }, [])








    return (

        <div>
            <div className='listProducts'>


                {
                    state.map(product => <button className='col-12' onClick={e => props.changeState(product)}>{product.name}</button>)
                }

            </div>


            <div className='crudPanel'>
                <button className='btn btn-primary'>+</button>
                <button className='btn btn-primary'>-</button>
            </div>
        </div>
    )




}
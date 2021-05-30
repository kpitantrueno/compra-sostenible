import { div } from 'prelude-ls'
import React from 'react'




export default function ListProducts(props) {

    let json = [{name:'leche', count:'0'},{name:'azucar', count:'0'},{name:'cafe', count:'0'}]
  
  


    return (    

        <div className='listProducts'>

            {
              json.map(product => <button className='col-12' onClick={e => props.changeState(JSON.stringify(product))}>{product.name}</button>)
            }

        </div>

    )




}
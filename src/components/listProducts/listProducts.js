import { div } from 'prelude-ls'
import React from 'react'









export default function ListProducts(props) {

    let products = [{name:'leche', count:'0'},{name:'azucar', count:'0'},{name:'cafe', count:'0'}]
  

    
  /*
    let arrProducts= []

    products.forEach( product => { 
        
     arrProducts.push(Object.values(product))
    
    })

  */



    return (    

        <div className='listProducts'>

            {
               // products.map(product => <button className='col-12' onClick={e => props.changeState(product)}>{product}</button>)
              // arrProducts.map(product => <button className='col-12' onClick={e => props.changeState(product)}>{product[0]}</button>)
              products.map(product => <button className='col-12' onClick={e => props.changeState([product])}>{product.name}</button>)
            }

        </div>

    )




}
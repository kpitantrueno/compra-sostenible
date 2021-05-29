import { useState } from 'react'


export default function ItemShopingCart(props) {

   const [state, setState] = useState([0])
   let product = JSON.parse(props.productData)


   function sum(){

    setState(parseInt(state,10)+1)

   }


   function subt(){


    setState(parseInt(state,10)-1)

   }


    return (

        <div className="card" >
            <img className="card-img-top"  />
            <div className ="card-body">
            <h5 className ="card-title">{product.name}</h5>
             {state}
            <button onClick={sum}>+</button>
            <button onClick={subt}>-</button>

            </div>
        </div>

    )



}
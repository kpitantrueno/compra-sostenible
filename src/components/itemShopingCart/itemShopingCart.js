import { useState } from 'react'


export default function ItemShopingCart(props) {

   const [state, setState] = useState(0)
  
   let json = JSON.parse(props.productData)

   

   function sum(){

    setState(state+1)

    props.addShopingCart({name:json.name,count:state+1})

   }


   function subt(){


    setState(parseInt(state,10)-1)

   // props.addShopingCart([{name:product,count:state-1}])


   }


    return (

        <div className="card" >
            <img className="card-img-top"  />
            <div className ="card-body">
            <h5 className ="card-title">{json.name}</h5>
             {state}
            <button onClick={sum}>+</button>
            <button >-</button>
            <button onClick={ e => {props.deleteItem(json.name)}} >delete</button>

            </div>
        </div>

    )



}
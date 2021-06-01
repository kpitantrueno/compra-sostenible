import { useState } from 'react'


export default function ItemShopingCart(props) {
   

  
   let json = JSON.parse(props.productData)


   const [state, setState] = useState(json.count)
  


   function sum(){

    setState(state+1)

    props.addShopingCart({name:json.name,count:state+1})

   }


   function subt(){

    if(state>0){

    setState(state-1)

    props.addShopingCart({name:json.name,count:state-1})

    }

   }


    return (

        <div className="card" >
            <img className="card-img-top"  />
            <div className ="card-body">
            <h5 className ="card-title">{json.name}</h5>
             {state}
            <button onClick={sum}>+</button>
            <button onClick={subt}>-</button>
            <button onClick={ e => {props.deleteItem(json.name)}} >delete</button>

            </div>
        </div>

    )



}
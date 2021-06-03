import { useState, useEffect } from 'react'


export default function ItemShopingCart(props) {
   
    
    
    let json = JSON.parse(props.productData)
    


   function sum(){

    props.addShopingCart({name:json.name,count:json.count+1})

   }


   function subt(){

    if(json.count>0){

    props.addShopingCart({name:json.name,count:json.count-1})

    }

   }


    return (

        <div className="card" >
            <img className="card-img-top"  />
            <div className ="card-body">
            <h5 className ="card-title">{json.name}</h5>
             {json.count}
            <button onClick={sum}>+</button>
            <button onClick={subt}>-</button>
            <button onClick={ e => {props.deleteItem(json.name)}} >delete</button>

            </div>
        </div>

    )



}
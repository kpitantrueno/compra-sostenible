import React from 'react'


export default function itemShopingCart(props) {

    return (

        <div className="card" >
            <img className="card-img-top"  />
            <div className ="card-body">
            <h5 className ="card-title">{props.productData}</h5>
            </div>
        </div>

    )



}
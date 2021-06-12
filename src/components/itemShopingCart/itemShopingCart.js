import { useState, useEffect } from 'react'
import './itemShopingCart.css';



export default function ItemShopingCart(props) {



    let json = JSON.parse(props.productData)

   


    function sum() {

        props.addShopingCart({ name: json.name, count: json.count + 1 })

    }


    function subt() {

        if (json.count > 0) {

            props.addShopingCart({ name: json.name, count: json.count - 1 })

        }

    }

    function inf(){


        props.advice(json.adv,'info')

    
      }


    return (

        
        <div className="card mt-4 shadow p-2 mb-5 bg-body rounded" >
            <div className="row no-gutters">
                <div className="col-sm-4">
                    <img className="card-img img-fluid" src={json.img} alt="Suresh Dasari Card" />
                </div>
                <div className="col-sm-8">
                    <div className="card-body m-3   text-center align-items-center">
                        
                        <h5 className="card-title">{json.name}</h5>

                      
                   

                      
                        <input className='me-1' type='button' onClick={sum} value='+' />
                        <strong  className='me-1'>{json.count}</strong>
                        <input  className='me-3' type='button' onClick={subt} value='-' />

                     


                        <button className="btn btn-warning me-1"  onClick={inf}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg></button>
                        



                        <button className="btn btn-danger  me-1" onClick={e => { props.deleteItem(json.name) }} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                        </button>

                        


                    </div>
                </div>
            </div>
        </div>





    )



}
import React from 'react'
import { useState } from 'react'




export default function Resume(props) {


  let json = []

  let cTotal = 0;

  let min = 0;

  let max = 100;

  props.data.forEach(element => {

    json = json.concat([JSON.parse(element)])

  });

  json.forEach(e => {

    cTotal += e.count * e.cO2;

  });

  if(cTotal >= 25 && cTotal <= 75){

    return (

      <div className='container'>
  
      <div className="progress m-2">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow={cTotal} aria-valuemin={min} aria-valuemax={max} style={{width: cTotal ? cTotal + "100%" : "0%"}}></div>
      </div>
  
        <div className='col-3'>
              <h2 className="h2">CO2 total: {cTotal.toFixed(2)} Kg</h2>
            </div>
  
  
  
        {
          json.map(data => {
  
            return (
              <div>
                <div className='row'></div>
                <div className='col-12'>Producto: {data.name}, Cantidad: {data.count} Kg, CO2: {data.cO2} Kg</div>
              </div>
  
            )
  
          })
  
        }
  
  
      </div>
  
    )

  }else if(cTotal > 75){

    return (

      <div className='container'>
  
      <div className="progress m-2">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow={cTotal} aria-valuemin={min} aria-valuemax={max} style={{width: cTotal ? cTotal + "100%" : "0%"}}></div>
      </div>
  
      <div className='col-3'>
        <h2 className="h2">CO2 total: {cTotal.toFixed(2)} Kg</h2>
      </div>
  
  
  
        {
          json.map(data => {
  
            return (
              <div>
                <div className='row'></div>
                <div className='col-12'>Producto: {data.name}, Cantidad: {data.count} Kg, CO2: {data.cO2} Kg</div>
              </div>
  
            )
  
          })
  
        }
  
  
      </div>
  
    )

  }else{

    return (

      <div className='container'>
  
      <div className="progress m-2">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={cTotal} aria-valuemin={min} aria-valuemax={max} style={{width: cTotal ? cTotal + "100%" : "0%"}}></div>
      </div>
  
      <div className='col-3'>
          <h2 className="h2">CO2 total: {cTotal.toFixed(2)} Kg</h2>
      </div>
  
  
  
        {
          json.map(data => {
  
            return (
              <div>
                <div className='row'></div>
                <div className='col-12'>Producto: {data.name}, Cantidad: {data.count} Kg, CO2: {data.cO2} Kg</div>
              </div>
  
            )
  
          })
  
        }
  
  
      </div>
  
    )



}
}
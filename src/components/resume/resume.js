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
              <p>CO2 total: {cTotal.toFixed(2)} Kg</p>
            </div>
  
  
  
        {
          json.map(data => {
  
            return (
              <div>
                <div className='row'></div>
                <div className='col-12'>{data.name}, {data.count} Kg, {data.cO2} CO2/Kg</div>
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
  
      <div className='col-12'>
        <p>CO2 total: {cTotal.toFixed(2)} Kg</p>
      </div>
  
  
  
        {
          json.map(data => {
  
            return (
              <div>
                <div className='row'></div>
                <div className='col-12'>{data.name}, {data.count} Kg, {data.cO2} CO2/Kg</div>
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
  
      <div className='col-12'>
          <p>CO2 total: {cTotal.toFixed(2)} Kg</p>
      </div>
  
  
  
        {
          json.map(data => {
  
            return (
              <div>
                <div className='row'></div>
                <div className='col-12'>{data.name}, {data.count} Kg, {data.cO2} CO2/Kg</div>
              </div>
  
            )
  
          })
  
        }
  
  
      </div>
  
    )



}
}
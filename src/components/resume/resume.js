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

  return (

    <div className='container'>


    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={cTotal} aria-valuemin={min} aria-valuemax={max} style={{width: cTotal ? cTotal + "100%" : "0%"}}></div>
    </div>

      <div className='col-3'>
            <h2>Dióxido de carbono</h2>
            <p>CO2 total: {cTotal.toFixed(2)} Kg</p>
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
import React from 'react'
import { useState } from 'react'


export default function Resume(props) {


  let json = []

  let cTotal = 0;

  let min = 0;

  let max = 100;

  // Recorre los datos del json

  props.resume.forEach(element => {

    json = json.concat([JSON.parse(element)])

  });

  json.forEach(e => {

    cTotal += e.count * e.cO2;

  });


  let style = ''
  let level = ''
  let alert = ''

  /**
   * Configura los estilos de la barra de progreso 
   * y las alertas del resumen en base al CO2 total
   */

  if (cTotal <= 25) {

    style = "progress-bar progress-bar-striped progress-bar-animated bg-success";
    level = 'Compra sostenible'
    alert = 'alert alert-success d-flex align-items-center'

  } else if (cTotal >= 25 && cTotal <= 75) {

    style = "progress-bar progress-bar-striped progress-bar-animated bg-warning";
    level = 'Compra arriesgada'
    alert = 'alert alert-warning d-flex align-items-center'

  } else {


    style = "progress-bar progress-bar-striped progress-bar-animated bg-danger";
    level = 'Compra no sostenible'
    alert = 'alert alert-danger d-flex align-items-center'
  }



  return (

    <div className='container'>

      <h3 className="text text-center col-12 mt-3">Resumen</h3>

      <div className="progress mt-3">
        <div className={style} role="progressbar" aria-valuenow={cTotal} aria-valuemin={min} aria-valuemax={max} style={{ width: cTotal + "%" }}></div>
      </div>

      <div className='col-12 mt-3 text-center'>
        <p><strong>CO2 total:</strong> {cTotal.toFixed(2)} Kg</p>
        <div class={alert} role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          <div className="ms-1">
            {level}
          </div>

        </div>
        <div>

          {json.map(data => {

            return (
              <div className="container">
                <ul class="list-inline border-bottom border-success">
                  <li class="list-inline-item">{data.count} Kg -</li>
                  <li class="list-inline-item">{data.name}</li>
                  <li class="list-inline-item">CO2: {data.cO2} Kg</li>
                </ul>

              </div>

            )

          })

          }

        </div>
      </div>


    </div>

  )

}
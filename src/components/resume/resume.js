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
  
        <div className='col-12'>
              <p><strong>CO2 total:</strong> {cTotal.toFixed(2)} Kg</p>
              <div class="alert alert-warning d-flex align-items-center" role="alert">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  </svg>
                    <div className="ms-1">
                      Compra arriesgada
                    </div>
              </div>
        </div>
  
  
      </div>
  
    )

  }else if(cTotal > 75){

    return (

      <div className='container'>
  
      <div className="progress m-2">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow={cTotal} aria-valuemin={min} aria-valuemax={max} style={{width: cTotal ? cTotal + "100%" : "0%"}}></div>
      </div>
  
      <div className='col-12'>
        <p><strong>CO2 total:</strong> {cTotal.toFixed(2)} Kg</p>
              <div class="alert alert-danger d-flex align-items-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div className="ms-1">
                      Compra contaminante
                    </div>
              </div>
      </div>
  
  
      </div>
  
    )

  }else{

    return (

      <div className='container'>
  
      <div className="progress m-2">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={cTotal} aria-valuemin={min} aria-valuemax={max} style={{width: cTotal ? cTotal + "100%" : "0%"}}></div>
      </div>
  
      <div className='col-12'>
          <p><strong>CO2 total:</strong> {cTotal.toFixed(2)} Kg</p>

          <div class="alert alert-success d-flex align-items-center" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
              <div className="ms-1">
                Compra segura
              </div>
          </div>
          
      </div>
  
  
      </div>
  
    )



}
}
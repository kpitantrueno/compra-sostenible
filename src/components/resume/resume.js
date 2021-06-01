import React from 'react'
import { useState } from 'react'




export default function Resume(props) {


  let json = []

  props.data.forEach(element => {

    json = json.concat([JSON.parse(element)])

  });


  return (

    <div className='container'>


      <div className="progress">
        <div className="progress-bar" role="progressbar"></div>
        <div className="progress-bar bg-success" role="progressbar"></div>
        <div className="progress-bar bg-info" role="progressbar" ></div>
      </div>



      {
        json.map(data => {

          return (
            <div>
              <di className='row'></di>
              <button className='col-3'>{data.name}{data.count}{data.CO2level}</button>
            </div>

          )

        })

      }





    </div>

  )


}
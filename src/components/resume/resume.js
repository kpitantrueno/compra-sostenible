import React from 'react'
import { useState } from 'react'




export default function Resume(props) {


  console.log(props.data)

  let json = []

  props.data.forEach(element => {

    json = json.concat([JSON.parse(element)])

  });


  return (

    <div className=''>

      {
        json.map(data => <button className='col-12'>{data.name}{data.count}{data.CO2level}</button>)
      }

    </div>

  )


}
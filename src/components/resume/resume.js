import React from 'react'
import { useState } from 'react'




export default function Resume(props) {

    const [state, setState] = useState([])

  //  setState(props.data)


  

    return (    

        <div className=''>

            {
              props.data.map(data => <button className='col-12'>{data}</button>)
            }

        </div>

    )




}
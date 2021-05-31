import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import ListProducts from './components/listProducts/listProducts'
import Shooping from './components/shoopingCart/shoopingCart'
import Resume from './components/resume/resume'


export default function App() {

  const [state, setState] = useState([])





  function addShopingCart(product) {


    state.forEach((e, i) => {

      let json = JSON.parse(e)

      if (json.name == product.name) {

        json.count = product.count

        let auxArr = state

        auxArr.splice(i, 1, JSON.stringify(json))

        setState([])

        setState(auxArr)

        setState(state.concat())


      }


    })


  }









  function addProduct(json) {

    let exist = false

    if (state.length == 0) {

      setState(state.concat([JSON.stringify(json)]))

    } else {

      state.forEach(e => {

        if (JSON.parse(e).name == json.name) {

          exist = true

        }

      })

      if (!exist) {

        setState(state.concat([JSON.stringify(json)]))

      }

    }

  }









  function deleteItem(nombre) {

    state.forEach((e, i) => {

      let json = JSON.parse(e)


      if (json.name == nombre) {

        let auxArr = state

        auxArr.splice(i, 1)

        setState([])

        setState(auxArr)

        setState(state.concat())

      }

    })

  }








  return (
    <div className="container">

      <div className='row'>
        <div className="listproducts col-2">
          <ListProducts changeState={addProduct} />
        </div>
        <div className="shopingcart col-8">
          <Shooping cosas={state} purchase={addShopingCart} deleteItem={deleteItem} />
        </div>
        <div className="resume col-2">
          <Resume data={state} />
        </div>
      </div>
    </div>
  );
}





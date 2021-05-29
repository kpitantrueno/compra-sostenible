import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListProducts from './components/listProducts/listProducts'
import { useState } from 'react'
import Shooping from './components/shoopingCart/shoopingCart'



function App() {

  const [state, setState] = useState([])



  function addProduct(product) {

      if(state.indexOf(product) == -1){

        setState(state.concat([product]))

      }

  }





  return (
    <div className="container">

      <div className='row'>
        <div className="listproducts col-2">
          <ListProducts changeState={addProduct} />
        </div>
        <div className="shopingcart col-8">
          <Shooping cosas={state} />
        </div>
        <div className="resume col-2">
        </div>
      </div>


    </div>
  );
}




export default App;

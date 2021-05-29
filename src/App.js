import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListProducts from './components/listProducts/listProducts'
import { useState } from 'react'
import Shooping from './components/shoopingCart/shoopingCart'



function App() {

  const [state, setState] = useState([])


  const [stateShopingCart, setStateShopingCart] = useState([])


  function addShopingCart(product) {


  }


  function addProduct(product) {

   
    
    setState(state.concat([JSON.stringify(product[0])]))
    

    /*
    if (state.indexOf(product.name) == -1) {

      setState(state.concat([product.name]))

    }
*/
  }





  return (
    <div className="container">

      <div className='row'>
        <div className="listproducts col-2">
          <ListProducts changeState={addProduct} />
        </div>
        <div className="shopingcart col-8">
          <Shooping cosas={state} purchase={setStateShopingCart} />
        </div>
        <div className="resume col-2">
        </div>
      </div>


    </div>
  );
}




export default App;

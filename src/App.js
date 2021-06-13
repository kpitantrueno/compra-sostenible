import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import ListProducts from './components/listProducts/listProducts'
import Shooping from './components/shoopingCart/shoopingCart'
import Resume from './components/resume/resume'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {

  const [state, setState] = useState([])




  //actualiza la cantidad del producto
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




  function savePurchase() {

    localStorage.setItem('purchase', JSON.stringify(state))

    advice('Compra guardada','success')

  }


  function loadPurchase() {


    if (localStorage.getItem('purchase') != null) {

      

      setState(JSON.parse(localStorage.getItem('purchase')))

      advice('Compra cargada','warn')


    } else {


      advice('No hay compra','info')

    }



  }




  function deleteAll() {

    setState([])

    advice('Compra eliminada','error')


  }







  function updateShopingCart(obj) {
      

    //SI EL PRODUCTO ACTUALIZADO ESTA EN EL CARRITO LO ACTUALIZA 
    state.forEach((e, i) => {
            
      let json = JSON.parse(e)
     
      if ((json.name).toUpperCase() == (obj.name).toUpperCase()) {

        let auxArr = state

        obj.count = json.count

        auxArr.splice(i, 1, JSON.stringify(obj))

        setState([])

        setState(auxArr)

        setState(state.concat())

      }

    })



    let storage = JSON.parse(localStorage.getItem('purchase'))

    storage.forEach((e, i) => {
            
      let json = JSON.parse(e)
     
      if ((json.name).toUpperCase() == (obj.name).toUpperCase()) {

        let auxArr = storage

        obj.count = json.count

        auxArr.splice(i, 1, JSON.stringify(obj))

        localStorage.setItem('purchase', JSON.stringify(auxArr))

      }

    })









  }



  function advice(adv,type){

    if(type == 'info'){

    toast.info(adv, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      } else if (type == 'warn'){

        toast.warn(adv, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });


      }else if (type == 'error'){

        toast.error(adv, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        }else if (type == 'success'){

          toast.success(adv, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          }





}//FIN DEL METODO









  return (
    <div className="container" id="main">

      <div className='app'>

        <div className='row'>

          <div className="listproducts col-2">
            <ListProducts id='list' changeState={addProduct} deleteItem={deleteItem} advice={advice} updateShopingCart={updateShopingCart}/>
          </div>


          <div className="shopingcart col-7 ">
            <Shooping cosas={state} purchase={addShopingCart} deleteItem={deleteItem} deleteAll={deleteAll} loadPurchase={loadPurchase} savePurchase={savePurchase} advice={advice}/>
            <ToastContainer />
          </div>



          <div className="resume col-3">
            <Resume data={state} />
          </div>

          
        </div>

     
      </div>
    </div>
  );
}





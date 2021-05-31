import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import ListProducts from './components/listProducts/listProducts'
import Shooping from './components/shoopingCart/shoopingCart'
import Resume from './components/resume/resume'


export default function App() {

  const [state, setState] = useState([])


  const [stateShopingCart, setStateShopingCart] = useState([])





  function addShopingCart(product) {
    
    
    
    
    
    state.forEach((e, i) => {
      
      let json = JSON.parse(e) 
      
      if(json.name == product.name){
        
        console.log(product)
        //tengo el registro actualizado
        json.count = product.count

        //creo un nuevo array sin el registro viejo
      
        let auxArr = state

        auxArr.splice(i,1,JSON.stringify(json))

        setState([])

        //el array ya no tiene el viejo valor
        setState(auxArr)




        setState(state.concat())

        //le concateno el nuevo valor
      //  setState(state.concat([JSON.stringify(json)]))




        /*
       
        console.log('ASI QUEDA EL SPLICE:---' + auxArr)

        setState([])

        console.log('ASI QUEDA STATE DESPUES DE BORRAR:---' + state)


        setState(auxArr)

        setState(state.concat())
*/
      }


      })




























/*

    if (!stateShopingCart.includes(product[0])) {



      // setStateShopingCart(stateShopingCart.concat(product[0]))


    } else {





    }

    */
    // !stateShopingCart.includes(product[0])


    /*
        if (stateShopingCart.length == 0) {
    
          setStateShopingCart(stateShopingCart.concat([[product[0], product[1]]]))
    
        }else{
    
            stateShopingCart.forEach(e => {
    
    
              let chivato = {exist:true}
    
              if (!e.includes(product[0])) {
      
                chivato.exist=true
                
              } 
              
              
              if(chivato.exist){
    
    
    
    
              }
              
              setStateShopingCart(stateShopingCart.concat([[product[0], product[1]]]))
    
    
    
            })
       
        }
      */











    /*
    
    if (stateShopingCart.length > 0) {

      stateShopingCart.forEach(e => {


        if (!stateShopingCart.includes(product[0])) {


          setStateShopingCart(stateShopingCart.concat([[product[0], product[1]]]))

        } else {
          console.log('entro')

          let auxArr = stateShopingCart
    
          auxArr.splice(auxArr.indexOf(product[0]),1,product[1])
    
    
          console.log(auxArr + 'este es el aux')
          
        }
        
      })
      
    }
    
    
    */


    /*
    // console.log(stateShopingCart)

    if (!stateShopingCart.includes(product[0])) {


      setStateShopingCart(stateShopingCart.concat([[product[0], product[1]]]))



    } else {
      console.log('entro')

      let auxArr = stateShopingCart

      auxArr.splice(auxArr.indexOf(product[0]),1,product[1])


      console.log(auxArr + 'este es el aux')
      
    }
    
    */





    /*
        if (stateShopingCart.length == 0) {
    
          setStateShopingCart(stateShopingCart.concat(JSON.stringify(product)))
    
        } else {
    
    
          let chivato = { exist: false, index: 0 }
    
          stateShopingCart.forEach((e, i) => {
    
            if (e.search(product[0].name) != -1) {
    
              chivato.exist = true
              chivato.index = i
    
            }
    
          })//FIN FOREACH
    
    
          if (chivato.exist) {
    
           // let auxArr = stateShopingCart
           // auxArr[chivato.index] = `{name:${product[0].name},count:${product[0].count}}`
           // setStateShopingCart(auxArr)
    
           setStateShopingCart(stateShopingCart.concat(JSON.stringify(product[0])))
    
          } else {
    
            setStateShopingCart(stateShopingCart.concat(JSON.stringify(product[0])))
    
          }
    
        }//FIN ELSE
    
    */





  }//FIN METODO



















  function addProduct(product) {

    let json = JSON.parse(product)

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









  function deleteItem(nombre){
   
    state.forEach((e, i) => {

      let json = JSON.parse(e) 


      if(json.name == nombre){

        let auxArr = state
       
        auxArr.splice(i,1)
       
        console.log('ASI QUEDA EL SPLICE:---' + auxArr)

        setState([])

        console.log('ASI QUEDA STATE DESPUES DE BORRAR:---' + state)


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
          <Shooping cosas={state} purchase={addShopingCart} deleteItem={deleteItem}/>
        </div>
        <div className="resume col-2">
        
          <Resume data={stateShopingCart} />
        
          <p>{state}</p>
        </div>
      </div>



    </div>
  );
}





import { div } from 'prelude-ls'
import React from 'react'
import { useState, useEffect } from 'react'
import './listProducts.css';


export default function ListProducts(props) {

    const [state, setState] = useState([])

    useEffect(() => {

        fetch('products.json')
            .then((response) => response.json())
            .then(data => setState(data));

        console.log(state)
    }, [])


    function newPro() {

        let a = document.getElementsByClassName('listproducts')
        let b = document.getElementsByClassName('shopingcart')
        let c = document.getElementsByClassName('products')
        let d = document.getElementsByClassName('form')


        a[0].style.transition = " 2s";
        a[0].classList.remove('col-2')
        a[0].classList.add('col-8')

        b[0].style.transition = " 2s";
        b[0].classList.remove('col-10')
        b[0].classList.add('col-4')

        // c[0].style.transition = " 6s";
        c[0].classList.remove('col-12')
        c[0].classList.add('col-2')
       
       
       // d[0].style.transition = " 6s";
        d[0].classList.add('col-10')
        d[0].style.display='block'
     
    }

    function closeForm() {

        let a = document.getElementsByClassName('listproducts')
        let b = document.getElementsByClassName('shopingcart')
        let c = document.getElementsByClassName('products')
        let d = document.getElementsByClassName('form')


        a[0].style.transition = " 2s";
        a[0].classList.remove('col-8')
        a[0].classList.add('col-2')

       b[0].style.transition = " 2s";
        b[0].classList.remove('col-4')
        b[0].classList.add('col-10')

     //   c[0].style.transition = " 3s";
        c[0].classList.remove('col-2')
        c[0].classList.add('col-12')
       
       
      // d[0].style.transition = " 3s";
        d[0].classList.remove('col-10')
        d[0].style.display='none'

    }

    return (

        <div>

            <div className='row'>

            <h1 class="text-white text-center">Alimentos</h1>

            <div className='products col-12'>

                {
                    state.map(product => <button className='col-10 mt-1 rounded btn btn-warning btn-sm p-0' onClick={e => props.changeState(product)}>{product.name}</button>)
                }

            </div>

            <div className='container form'>

                <input type='text' className='col-10 mt-2' value='Nombre del producto' />
                <input type='text' className='col-10 mt-2' value='Cantidad por kg' />
                <input type='text' className='col-10 mt-2' value='CO2 por kg' />

            </div>

            </div>

            <div className='crudPanel'>
                <button onClick={newPro} className='btn btn-secondary mb-4 m-1'>+</button>
                <button onClick={closeForm} className='btn btn-secondary mb-4 m-1'>-</button>
            </div>

        </div>
    )

}
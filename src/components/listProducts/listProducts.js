import { div } from 'prelude-ls'
import React from 'react'
import { useState, useEffect } from 'react'
import './listProducts.css';


export default function ListProducts(props) {

    const [state, setState] = useState([])
    const [galeryState, galerySetState] = useState([])



    useEffect(() => {

        fetch('products.json')
            .then((response) => response.json())
            .then(data => setState(data));

        fetch('images.json')
            .then((response) => response.json())
            .then(data => galerySetState(data));




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
        d[0].style.display = 'block'

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
        d[0].style.display = 'none'

    }





    function crud(e) {


        let fname = document.getElementById('name').value
        let fco2 = parseFloat(document.getElementById('co2').value)
        let icon = document.getElementById('icon').value
        let option = e.target.value
     


        if (option == 'eliminar') {


            state.forEach((e, i) => {


                if (e.name == fname) {


                    let auxArr = state

                    auxArr.splice(i, 1)

                    setState([])

                    setState(auxArr)

                    setState(state.concat())

                }


            })



        } else if (option == 'añadir') {


            let exist = false


            if (state.length == 0) {

                // setState(state.concat([JSON.stringify(json)]))

            } else {


                state.forEach(e => {

                    if (e.name == fname) {


                        exist = true

                    }

                })

                if (!exist) {



                    //valido los campos
                    if (!isNaN(fco2) & icon != '' & icon != undefined) {

                        setState(state.concat([{ name: fname, count: 1, cO2: fco2, img: icon }]))


                    } else {

                        alert('los datos no son correctos')

                    }

                } else {

                    alert('el producto ya existe')

                }

            }


        } else if (option == 'modificar') {


            state.forEach((e, i) => {


                if (e.name == fname) {

                    state[i] = { name: fname, count: 1, cO2: fco2, img:icon }
                    setState(state.concat())

                }

            })



        }

    }








    function imgSelected(e) {

        let icons = document.getElementsByClassName('icons')
        let icon = document.getElementById('icon')

        for (let item of icons) {
            item.classList.remove('iconSelecter')
        }

        e.target.classList.add('iconSelecter')

        icon.value = e.target.name

    }











    return (

        <div className='container'>

            <div className='row'>

                <h1 class="text-white text-center">Alimentos</h1>

                <div className='products col-12'>

                    {
                        state.map(product => <button className='col-10 mt-1 rounded btn btn-warning btn-sm p-0' onClick={e => props.changeState(product)}>{product.name}</button>)

                    }

                </div>



                <div className='container form'>

                    <form method='#' action="javascript:void(0);">



                        <div className='col-12'>

                            <div className='inputs'>
                                <label for="name" className='col-12 badge badge-secondary'>Nombre</label>
                                <input id='name' type='text' className='col-10 mt-2' />
                                <label for="co2" className='col-12 badge badge-secondary'>Co2</label>
                                <input id='co2' type='text' className='col-10 mt-2' />
                            </div>


                            <div className='col-12 '>

                                {
                                    galeryState.map(image => <img src={image.img} className='icons' name={image.img} onClick={imgSelected} />)

                                }


                                <p id='icon'></p>
                            </div>


                        </div>


                        <div className='col-12'>
                            <input type="submit" value='añadir' onClick={crud} />
                            <input type="submit" value='eliminar' onClick={crud} />
                            <input type="submit" value='modificar' onClick={crud} />
                        </div>



                    </form>

                </div>

            </div>



            <div className='crudPanel'>
                <button onClick={newPro} className='btn btn-secondary mb-4 m-1'>+</button>
                <button onClick={closeForm} className='btn btn-secondary mb-4 m-1'>-</button>
            </div>



        </div>
    )

}
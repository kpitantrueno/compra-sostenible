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
        let c = document.getElementsByClassName('productsPanel')
        let d = document.getElementsByClassName('form')


        a[0].style.transition = " 0.2s";
        a[0].classList.remove('col-2')
        a[0].classList.add('col-4')

        b[0].style.transition = " 0.2s";
        b[0].classList.remove('col-7')
        b[0].classList.add('col-5')

        // c[0].style.transition = " 6s";
        c[0].classList.remove('col-12')
        c[0].classList.add('col-4')


        // d[0].style.transition = " 6s";
        d[0].classList.add('col-8')
        d[0].style.display = 'block'

    }

    function closeForm() {

        let a = document.getElementsByClassName('listproducts')
        let b = document.getElementsByClassName('shopingcart')
        let c = document.getElementsByClassName('productsPanel')
        let d = document.getElementsByClassName('form')


        a[0].style.transition = "  0.2s";
        a[0].classList.remove('col-4')
        a[0].classList.add('col-2')

        b[0].style.transition = "  0.2s";
        b[0].classList.remove('col-5')
        b[0].classList.add('col-7')

        // c[0].style.transition = " 6s";
        c[0].classList.remove('col-4')
        c[0].classList.add('col-12')


        // d[0].style.transition = " 6s";
        d[0].classList.add('col-8')
        d[0].style.display = 'none'
    }


    function crud(e) {


        let fname = document.getElementById('name').value
        let fco2 = parseFloat(document.getElementById('co2').value)
        let icon = document.getElementById('icon').value
        let option = e.target.value



        if (option == 'Eliminar') {


            state.forEach((e, i) => {


                if (e.name == fname) {


                    let auxArr = state

                    auxArr.splice(i, 1)

                    setState([])

                    setState(auxArr)

                    setState(state.concat())

                }


            })



        } else if (option == 'Añadir') {


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
                    if (fname!='' & !isNaN(fco2) & icon != '' & icon != undefined) {

                        setState(state.concat([{ name: fname, count: 1, cO2: fco2, img: icon }]))


                    } else {

                        alert('los datos no son correctos')

                    }

                } else {

                    alert('el producto ya existe')

                }

            }


        } else if (option == 'Modificar') {


            state.forEach((e, i) => {


                if (e.name == fname) {

                    state[i] = { name: fname, count: 1, cO2: fco2, img: icon }
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

        <div>


            <div className='row'>


                <h4 class="text text-center col-12">PRODUCTOS</h4>



                <div className='productsPanel col-12'>

                    <div className='opencloseform'>
                        <div onClick={newPro} className='col-12 rounded p-1 m-1 mb-4 point'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
                            </svg>Nuevo</div>
                        
                    </div>


                    <div className='products'>
                        {
                            state.map(product => <div className='col-12 rounded p-1 m-1 point' onClick={e => props.changeState(product)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>{product.name}</div>)
                        }
                    </div>


                </div>

                <div className='form'>


                    <form method='#' action="javascript:void(0);">


                        <div className='fields col-12'>

                            <div className='inputs mt-4'>
                            <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                                    <input type="text" id="name" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">CO2</span>
                                    <input type="text" id="co2" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>


                            <div className='col-12 '>
                                {
                                    galeryState.map(image => <img src={image.img} className='icons' name={image.img} data-bs-toggle="tooltip" data-bs-placement="top" title={image.tlt} onClick={imgSelected} />)

                                }
                                <p id='icon'></p>
                            </div>


                        </div>

                        <div className=' crudPanel col-12'>

                            <input className="m-1 btn-sm green" type="submit" value='Añadir' onClick={crud} />
                            <input className="m-1 btn-sm green" type="submit" value='Eliminar' onClick={crud} />
                            <input className="m-1 btn-sm green" type="submit" value='Modificar' onClick={crud} />
                            
                        </div>

                        <div onClick={closeForm} className='col-12 rounded p-1 m-1 mb-4 point'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
                        </svg>Cerrar</div>


                    </form>

                </div>

            </div>

        </div>
    )

}
import { div } from 'prelude-ls'
import React from 'react'
import { useState, useEffect } from 'react'
import './listProducts.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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


    // Función para abrir y cerrar el form del crud

    function useForm(e) {

        let listproducts = document.getElementsByClassName('listproducts')
        let shoppingCart = document.getElementsByClassName('shoppingCart')
        let productsPanel = document.getElementsByClassName('productsPanel')
        let form = document.getElementsByClassName('form')

        if (e.target.id == 'openForm') {

            listproducts[0].style.transition = " 0.2s";
            listproducts[0].classList.remove('col-2')
            listproducts[0].classList.add('col-4')

            shoppingCart[0].style.transition = " 0.2s";
            shoppingCart[0].classList.remove('col-7')
            shoppingCart[0].classList.add('col-5')

            productsPanel[0].classList.remove('col-12')
            productsPanel[0].classList.add('col-4')

            form[0].classList.add('col-8')
            form[0].style.display = 'block'


        } else if (e.target.id == 'closeForm') {

            listproducts[0].style.transition = " 0.2s";
            listproducts[0].classList.remove('col-4')
            listproducts[0].classList.add('col-2')

            shoppingCart[0].style.transition = " 0.2s";
            shoppingCart[0].classList.remove('col-5')
            shoppingCart[0].classList.add('col-7')

            productsPanel[0].classList.remove('col-4')
            productsPanel[0].classList.add('col-12')

            form[0].classList.add('col-8')
            form[0].style.display = 'none'

        }

    }

    // Recoge los datos del form

    function getDataForm() {

        return {
            name: document.getElementById('name').value,
            count: 1,
            cO2: parseFloat(document.getElementById('co2').value),
            img: document.getElementById('icon').value,
            adv: document.getElementById('advice').value
        }

    }

    // Añade un nuevo elemento a la lista de productos

    function newProduct() {

        let exist = false
        let dataForm = getDataForm()

        state.forEach(e => {

            if ((e.name).toUpperCase() == (dataForm.name).toUpperCase()) {

                exist = true

            }

        })

        if (!exist) {

            if (dataForm.name != '' & !isNaN(dataForm.cO2) & dataForm.img != '' & dataForm.img != undefined) {

                setState(state.concat([dataForm]))

                props.notify('Producto añadido', 'success')

            } else {

                props.notify('Faltan datos o alguno no es correcto', 'info')
            }

        } else {

            props.notify('El producto ya existe', 'info')

        }

    }


    // Elimina un producto de la lista, del carrito y del storage

    function deleteProduct() {

        let dataForm = getDataForm()

        state.forEach((e, i) => {

            if ((e.name).toUpperCase() == (dataForm.name).toUpperCase()) {

                let auxArr = state

                auxArr.splice(i, 1)

                setState([])

                setState(auxArr)

                setState(state.concat())

                props.deleteItem(e.name)

                let storage = JSON.parse(localStorage.getItem('purchase'))

                storage.forEach((a, i) => {

                    let json = JSON.parse(a)

                    if ((json.name).toUpperCase() == (e.name).toUpperCase()) {

                        let auxArr = storage

                        auxArr.splice(i, 1)

                        localStorage.setItem('purchase', JSON.stringify(auxArr))

                    }

                })

                props.notify('Producto eliminado', 'error')

            }

        })

    }

    // Actualiza un producto de la lista

    function updateProduct() {

        let dataForm = getDataForm()

        state.forEach((e, i) => {

            if ((e.name).toUpperCase() == (dataForm.name).toUpperCase()) {

                if (isNaN(dataForm.cO2)) {

                    dataForm.cO2 = e.cO2

                    props.notify('El cO2 no es correcto, se mantiene el valor anterior', 'warn')
                }

                if (dataForm.img == '' || dataForm.img == undefined) {

                    dataForm.img = e.img

                }

                if (dataForm.adv == '') {

                    dataForm.adv = e.adv

                }

                state[i] = dataForm

                setState(state.concat())

                props.notify('Producto actualizado', 'warn')

                props.updateShopingCart(dataForm)

            }

        })

    }


    // Limpia los campos del form

    function cleanForm() {

        document.getElementById('name').value = ''
        document.getElementById('co2').value = ''
        document.getElementById('icon').value = ''
        document.getElementById('advice').value = ''

        let icons = document.getElementsByClassName('icons')

        for (let item of icons) {
            item.classList.remove('iconSelecter')
        }

    }


    // Selecciona un icono para el producto

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

                <h3 className="text text-center col-12 mt-3">Productos</h3>

                <div className='productsPanel col-12'>

                    <div className='opencloseform'>
                        <div onClick={useForm} id="openForm" className='col-12 p-1 m-1 mb-4 point h5 border border-2 border-success rounded-pill mt-3 text-center'>Nuevo</div>

                    </div>

                    <div className='products'>
                        {
                            state.map(product => <div className='col-12 rounded p-1 m-1 point' onClick={e => props.addProduct(product)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>{product.name}</div>)
                        }
                    </div>


                </div>

                <div className='form'>

                    <form method='#' action="javascript:void(0);">

                        <div className='fields col-12'>

                            <div className='inputs mt-4'>
                                <div className="input-group input-group-sm mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                                    <input type="text" id="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">CO2</span>
                                    <input type="text" id="co2" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text">Info</span>
                                    <textarea id="advice" class="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>

                            <div className="col-12">

                            <h4 className="text text-center col-12 mt-3 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                                <span className="ms-3">Elige una imagen</span>
                            </h4>

                            </div>

                            <div className='col-12 '>
                                {
                                    galeryState.map(image => <img src={image.img} className='icons' name={image.img} data-bs-toggle="tooltip" data-bs-placement="top" title={image.tlt} onClick={imgSelected} />)

                                }
                                <p id='icon'></p>
                            </div>


                        </div>

                        <div className='crudPanel col-12 d-flex justify-content-center'>

                            <button className="m-1 btn-sm green shadow" onClick={newProduct}>Añadir</button>

                            <button className="m-1 btn-sm green shadow" onClick={deleteProduct}>Eliminar</button>

                            <button className="m-1 btn-sm green shadow" onClick={updateProduct}>Actualizar</button>

                        </div>

                        <button className="m-1 btn-sm col-12 green shadow" onClick={cleanForm}>Limpiar</button>

                        <div onClick={useForm} id="closeForm" className='col-12 rounded p-1 m-1 mb-4 point'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z" />
                            </svg>Cerrar</div>

                    </form>

                </div>

            </div>

        </div>
    )

}
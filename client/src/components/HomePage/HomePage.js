import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getProducts} from '../../reducers/products'
import {addToCart} from '../../reducers/cartReducers'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton'
import styles from './Homepage.module.css'
import Loader from '../shared/Loader'
import Modal from './Modal'

const HomePage = () => {

    const dispatch = useDispatch()
    const fetch = useSelector(state => state.products)
    const {products,loading,error} = fetch

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleCart = (product) => {
        // If product already in cart, increment it's quantity value by 1
        const productInCart = cartItems.find(item => product._id === item.product)
        if(productInCart){
            // If product is in stock increment it's quantity value by 1
            if(productInCart.qty < productInCart.inStock){
                handleOpen()
                dispatch(addToCart(product._id, Number(productInCart.qty+1)))
            }
            else{
                alert('Out of stock')
            }
        }
        // If it's not in cart add it to cart with it's quantity value equaled to one
        else{
            handleOpen()
            dispatch(addToCart(product._id, 1))
        }
    }
    //Hook for filtering products
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    return loading?<Loader/>:error?<div>{error}</div>: 
    <div className = {styles.productsWrapper}>
        <div>
            <h1>Our Products</h1>
            <div className = {styles.productsFilter}>
                <input placeholder = 'Search product' onChange = {e => setInputValue(e.target.value.toLowerCase())}></input>
            </div>
            <ul className = {styles.products}>
            {
                products.map(product => (
                            product.name.toLowerCase().indexOf(inputValue)!==-1 &&
                            <li key = {product._id}>
                            <div className = {styles.product}>
                            <div>
                                <Link to = {`/products/${product._id}`}>
                                <img className = {styles.productImage} src={product.image} alt=""/>
                                </Link>
                            </div>
                            <div className = {styles.productName}>
                                <Link to = {`/products/${product._id}`}>
                                {product.name}
                                </Link>
                            </div>
                            <div className = {styles.productBrand}>
                                {product.brand}
                            </div>
                            <div className= {styles.addToCart}>
                                <div>
                                    {product.price}
                                </div>
                                <div>
                                    <IconButton onClick = {() => handleCart(product)} >
                                        <AddShoppingCartIcon 
                                        style = {{
                                        color: '#3f51b5',
                                        cursor: 'pointer'}} size = 'large'/>
                                    </IconButton>
                                    <Modal open = {open} handleOpen = {handleOpen} handleClose = {handleClose}/>
                                </div>
                            </div>
                        </div>
                    </li>
                    )
                )
            }            
            </ul>
            </div>
            </div>
}

export default HomePage
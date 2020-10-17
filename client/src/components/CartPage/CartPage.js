import React from 'react' 
import {useSelector, useDispatch} from 'react-redux'
import {addToCart} from '../../reducers/cartReducers'
import {removeFromCart} from '../../actions'
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from './CartPage.module.css'
import Table from './Table'

const CartPage = (props) => {

    const dispatch = useDispatch()
    
    const cart  = useSelector(state => state.cart)
    const {cartItems} = cart

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }

    const onSelectChange = (productId, e) => {
        dispatch(addToCart(productId, Number(e.target.value)))
    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=checkout')
    }

    const handleBackClick = () => {
        props.history.goBack()
    }

    const continueShopping = () => {
        props.history.push('/')
    }
    
    return(
        <div>
            {cartItems.length === 0 ?<div className = {styles.emptyCart}>Cart is empty</div>:
            <div>
                <Button onClick = {handleBackClick} variant="contained" className = 'back-btn' color="secondary" startIcon={<ArrowBack />}>
                        Back
                </Button>
            <div className = {styles.cartWrapper}>
                <div>
                    <h3 className = {styles.title}>Shopping Cart</h3>
                    <Table cartItems = {cartItems} onRemove = {removeFromCartHandler} onSelectChange ={onSelectChange}/>
                </div>

                <div className = {styles.cartAction}> 
                    <h3>Total price: {cartItems.reduce((a,c) => a + Number(c.price.split('$')[0]) * Number(c.qty), 0)}$</h3>
                    <Button style = {{textTransform: 'capitalize'}} onClick = {checkoutHandler} variant="contained" color="primary">Proceed To Checkout</Button>
                    <Button style = {{textTransform: 'capitalize'}} onClick = {continueShopping} variant="contained" color="secondary">Continue Shopping ?</Button>
                </div>
            </div>
            </div>
        }
        </div>
           
    )
}


export default CartPage

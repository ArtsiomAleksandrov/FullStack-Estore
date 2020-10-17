import React from 'react'
import {useSelector} from 'react-redux'
import styles from './Checkout.module.css'
import PaypalBtn  from './PaypalBtn';

const Payment = ({Props}) => {

    const shipping = useSelector(state => state.shippingDetails) 
    const {shippingDetails} = shipping

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const totalQuantity = cartItems.reduce((a,c) => a + Number(c.qty), 0)
    
    const productsTotalPrice = cartItems.reduce((a,c) => a + (Number(c.price.split('$')[0] * c.qty)), 0)
    const tax = Math.round(productsTotalPrice/100*25)

    return (
        <div className = {styles.paymentWrapper}>
            <div className = {styles.orderInfo}>
                <div className = {styles.shippingAddress}>
                    <h3>Shipping Address</h3>
                    {
                        Object.keys(shippingDetails).map((key,index)=> (
                            <span>{shippingDetails[key]}</span>
                        ))
                    }
                </div>
                <div className = {styles.orderedProducts}>
                  <h3>Ordered Products</h3>
                    <div>
                        {cartItems.map(item => (
                            <div className = {styles.productContainer}>
                                <div className = {styles.productInfo}>
                                    <img src = {item.image} alt = '#'/>
                                    <div>
                                        <span className = {styles.productName}>{item.name}</span>
                                        <span>Quantity: {item.qty}</span>
                                    </div>
                                </div>

                                <div className = {styles.productPrice}>
                                     <span>{item.price}</span>
                                </div>  
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className = {styles.paymentInfoContainer}>
                <div className = {styles.orderSummary}>
                <h3>Order Summary</h3>
                    <div>
                        {/* Total products price */}
                        <span>Products: {productsTotalPrice}$</span>
                        {/* 25% tax of total products price*/}
                        <span>Tax: {tax}$</span>
                        <span>Shipping: Free</span>
                        {/* Order total price including taxes*/}
                        <span className = {styles.orderTotalPrice}>Order Total:  {Math.round(productsTotalPrice + tax)}$</span>
                        <PaypalBtn
                        Props = {Props} 
                        totalPrice = {productsTotalPrice + tax}
                        totalQuantity = {totalQuantity}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
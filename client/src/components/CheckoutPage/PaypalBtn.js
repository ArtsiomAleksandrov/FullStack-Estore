import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {paymentSuccess} from '../../actions'
import {emptyCart} from '../../actions'
import {useDispatch} from 'react-redux'
const PaypalBtn = ({Props,totalPrice, totalQuantity}) => {

    const dispatch = useDispatch()

    const onSuccess = (payment) => {
        payment.totalPrice = totalPrice 
        payment.totalQuantity = totalQuantity
        dispatch(emptyCart())
        dispatch(paymentSuccess({payment}))
        Props.history.push('/profile')
    }

    const onCancel = (data) => {

        console.log('The payment was cancelled!', data);

    }

    const onError = (err) => {
        console.log("Error!", err);
    }

    let env = 'sandbox'; 
    let currency = 'USD';
    let total = totalPrice;


    const client = {
        sandbox:    'AUM2arPSGe3xT-Z__2W0vNV7ZbowxxgGXX5f42LIfAAmDHB41lQtcQwQU22P0gUYNGiHYKtmG2L9VDEW',
        production: 'YOUR-PRODUCTION-APP-ID',
    }

    return (
        <PaypalExpressBtn 
        env={env} 
        client={client} 
        currency={currency} 
        total={total} 
        onError={onError} 
        onSuccess={onSuccess} 
        onCancel={onCancel} 
        style = {{size: 'large', color: 'blue', shape: 'rect'}}/>
    );
}
export default PaypalBtn
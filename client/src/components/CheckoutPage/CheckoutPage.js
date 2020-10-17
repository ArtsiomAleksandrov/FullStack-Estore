import React from 'react'
import Stepper from './Stepper'
import {useSelector} from 'react-redux'
import styles from './Checkout.module.css'
import {Link} from 'react-router-dom'
const Checkout = (props) => {

    const signIn = useSelector(state => state.signIn)
    const {userInfo} = signIn

    return (
        <div>
            {userInfo?<Stepper Props = {props}/>:<h2 className = {styles.title}>You need to <Link to = '/signin'>sign in</Link> to make payment</h2>}
        </div>
    )
}

export default Checkout
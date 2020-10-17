import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import styles from './Checkout.module.css'
import {useDispatch} from 'react-redux'
import {saveShipping} from '../../reducers/shippingDetails'
const Shipping = ({next}) => {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(address === '' || city === '' || postalCode === '' || country === ''){
            alert('Input field cannot be empty')
        }
        else{
            dispatch(saveShipping({address,postalCode,city,country}))
            next()
        }
    }

    return (
        <div className = {styles.formWrapper}>
            <h1 className = {styles.formTitle}>Shipping</h1>
                <form onSubmit = {handleSubmit}>
                    <input placeholder = 'Postal Code' onChange = {e => setPostalCode(e.target.value)} className = 'form input-email'/>
                    <input placeholder = 'Address' onChange = {e => setAddress(e.target.value)} className = 'form input-email'/>
                    <input placeholder = 'City' onChange = {e => setCity(e.target.value)} className = 'form input-email'/>
                    <input placeholder = 'Country' onChange = {e => setCountry(e.target.value)} className = 'form input-email'/>
                    <div>
                        <Button type = 'submit' style = {{
                        borderRadius: '1rem', 
                        textTransform: 'capitalize', 
                        fontWeight: 'lighter'}} 
                        variant="contained" color="primary">
                            Continue
                        </Button>
                    </div>
                </form>
        </div>
    )
}

export default Shipping

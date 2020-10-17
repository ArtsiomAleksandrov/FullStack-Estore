import React, {useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {signIn} from '../../reducers/signIn'
import Button from '@material-ui/core/Button'
import styles from './SignIn.module.css'
import Loader from '../shared/Loader'

const SignInPage = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userSignIn = useSelector(state => state.signIn)
    const {userInfo,loading,error} = userSignIn
    const dispatch = useDispatch()

    useEffect(() => {
        if(userInfo){
            //If user got here through checkout btn then redirect to checkout
            if(props.location.search === '?redirect=checkout'){
                props.history.push('/checkout')
            }
            else{
                props.history.push('/')
            }
        }
    }, [userInfo,props.history, props.location.search])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signIn(email,password))
    }

    return (
        <div>
        {loading?<Loader/>:error?<div>Error: {error.message}</div>:
        <div className = {styles.formWrapper}>
            <h1 className = {styles.formTitle}>Sign In</h1>
                <form onSubmit = {handleSubmit}>
                    <input placeholder = 'Email' type = 'email' id = 'email' name = 'email' onChange = {e => setEmail(e.target.value)} className = 'form input-email'></input>
                    <input placeholder = 'Password' type = 'password' id = 'password' name = 'password' minLength = '7' onChange = {e => setPassword(e.target.value)} className = 'form input-password'></input>
                    <div>
                        <Button type = 'submit' style = {{
                        borderRadius: '1rem', 
                        textTransform: 'capitalize', 
                        fontWeight: 'lighter'}} 
                        variant="contained" color="secondary">
                            Sign In
                        </Button>
                        <Link to = {props.location.search === '?redirect=checkout'?'/register?redirect=checkout':'/register'}>New to Viasella?</Link>
                    </div>
                </form>
        </div>
        }
        </div>
    )
}

export default SignInPage

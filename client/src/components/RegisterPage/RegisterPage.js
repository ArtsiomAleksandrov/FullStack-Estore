import React, {useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {register} from '../../reducers/register'
import {signIn} from '../../reducers/signIn'
import Button from '@material-ui/core/Button'
import styles from './RegisterPage.module.css'
const RegisterPage = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [RePassword, setRePassword] = useState('')
    const userRegister = useSelector(state => state.register)
    const {newUserInfo} = userRegister

    const dispatch = useDispatch()

    useEffect(() => {
        if(newUserInfo){
            if(props.location.search === '?redirect=checkout'){
                dispatch(signIn(newUserInfo.email,newUserInfo.password))
                props.history.push('/checkout')
            }
            else{
                dispatch(signIn(newUserInfo.email,newUserInfo.password))
                props.history.push('/')
            }
        }
    },[newUserInfo,props.history, props.location.search, dispatch])

    const handleSubmit = e => {
        e.preventDefault()
        if(password === RePassword){
            dispatch(register(name,email,password))
        }
    }

    return (
        <div>

        <div className = {styles.formWrapper}>
            <h1 className = {styles.formTitle}>Register</h1>
                <form onSubmit = {e => handleSubmit(e)}>
                <input onChange = {e => setName(e.target.value)} placeholder = 'Username' name = 'email'className = 'form input-email'></input>
                    <input onChange = {e => setEmail(e.target.value)} placeholder = 'Email' type = 'email' name = 'email'  className = 'form input-email'></input>
                    <input onChange = {e => setPassword(e.target.value)} minLength = '7' placeholder = 'Password' type = 'password' name = 'password' className = 'form input-password'></input>
                    <input onChange = {e => setRePassword(e.target.value)} minLength = '7' placeholder = 'Repeate password' type = 'password' name = 'rePassword' className = 'form input-password'></input>
                    <div>
                        <Button type = 'submit' style = {{
                        borderRadius: '1rem', 
                        textTransform: 'capitalize', 
                        fontWeight: 'lighter',
                        width: '45%'}} 
                        variant="contained" color="secondary">
                            Create An Account
                        </Button>
                        <Link to = '/signin'>Already have an account ?</Link>
                    </div>
                </form>
            
        </div>
        </div>
    )
}

export default RegisterPage
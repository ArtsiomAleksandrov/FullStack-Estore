import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import styles from './Header.module.css'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {signOut} from '../../actions'

const Header = () => {
    const dispatch = useDispatch()

    const userSignIn = useSelector(state => state.signIn)
    const {userInfo} = userSignIn

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const countItemsInCart = () => {
        return cartItems.reduce((a,c) => a + Number(c.qty), 0)
    }

    const handleSignOut = () => {
        dispatch(signOut())
    }

    return(
    <header>
        <nav className = {styles.navigation}>
            <div className = {styles.brand}>
                <Link to = '/'>ViaSella</Link>
            </div>
            <div className = {styles.navLinks}>
            <Link to = '/admin'>Admin</Link>
            <Link to = '/cart'>
            <IconButton aria-label="cart">
                <Badge badgeContent= {countItemsInCart()} color="secondary">
                    <ShoppingCartIcon style = {{color: '#fff'}}/>
                </Badge>
            </IconButton>
            </Link>
            {
                userInfo?<div>
                    <Link to = '/profile'>{userInfo.name}</Link>
                    <Link to = '#'> 
                        <IconButton onClick = {handleSignOut} aria-label="cart">
                            <ExitToAppIcon style = {{color: '#fff'}}/>
                        </IconButton>
                    </Link>
                </div>:
                <div>
                    <Link to = '/signin'>Sign in</Link>
                    <Link to = '/register'>Register</Link>
                </div>
            }
            </div>
        </nav>
    </header>
    )
}

export default Header
import React from 'react';
import Header from './Header/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import ProductPage from './ProductPage/ProductPage'
import CartPage from './CartPage/CartPage'
import SigninPage from './SignInPage/SignInPage'
import RegisterPage from './RegisterPage/RegisterPage'
import AdminPanel from './AdminPanel/AdminPanel'
import CheckoutPage from './CheckoutPage/CheckoutPage'
import ProfilePage from './ProfilePage/ProfilePage'
import '../index.css'

function App() {

  return (
  <Router>
    <div className = 'container'>
      <Header/>
    
      <main className = 'main'>
        <Route path = '/products/:id' component = {ProductPage} />
        <Route path = '/' exact = {true} component = {HomePage}/>
        <Route path = '/cart/:id?' component = {CartPage}/>
        <Route path = '/signin' component = {SigninPage}/>
        <Route path = '/register' component = {RegisterPage}/>
        <Route path = '/checkout' component = {CheckoutPage}/>
        <Route path = '/profile' component = {ProfilePage}/>
        <Route path = '/admin' component = {AdminPanel}/>
      </main>
      
      <footer className = 'footer'>
          All rights reserved.
      </footer>
    </div>
  </Router>
  );
}

export default App;
 
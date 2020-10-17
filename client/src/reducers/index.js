import {productsReducer} from './products'
import {productDetailsReducer} from './productDetails'
import {combineReducers} from 'redux'
import {productQtyReducer} from './productQty'
import {cartReducer} from './cartReducers'
import {signInReducer} from './signIn'
import {registerReducer} from './register'
import {manageProductsReducer} from './manageProducts'
import {deleteProductReducer} from './deleteProduct'
import {shippingDetailsReducer} from './shippingDetails'
import {paymentReducer} from './payment'
const reducers = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    productQty: productQtyReducer,
    cart: cartReducer,
    signIn: signInReducer,
    register: registerReducer,
    manageProducts: manageProductsReducer,
    deleteProduct: deleteProductReducer,
    shippingDetails: shippingDetailsReducer,
    payment: paymentReducer
})

export default reducers
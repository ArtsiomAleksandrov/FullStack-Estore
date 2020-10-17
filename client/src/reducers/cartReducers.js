import {ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART} from '../action_types'
import {cartProduct} from '../actions'
import axios from 'axios'

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const item = action.payload
            const product = state.cartItems.find(x => x.product === item.product) 
            if(product){
                return { cartItems: state.cartItems.map(x => x.product === product.product?item:x)}
            }
            else{
                return { cartItems: state.cartItems.concat(item)}
            }
        case REMOVE_FROM_CART: 
        const indexToRemove = state.cartItems.findIndex(item => item.product === action.payload)
            return { cartItems: [...state.cartItems.slice(0,indexToRemove), ...state.cartItems.slice(indexToRemove + 1)]}
        case EMPTY_CART:
            return{cartItems: []}
        default: return state
    }
}

export const addToCart = (productId, qty) => async(dispatch, getState) => {
    const {data} = await axios.get(`/api/product/${productId}`)
    dispatch(cartProduct(data,qty))
}



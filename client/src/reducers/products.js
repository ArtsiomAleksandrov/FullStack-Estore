import axios from 'axios'
import {PPODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL} from '../action_types'
import {productsRequest, productsSuccess, productsFail} from '../actions'

export const productsReducer = (state = {products: []}, action) => {
    switch(action.type){
        case PPODUCTS_REQUEST:
            return {loading: true, products: []}
        case PRODUCTS_SUCCESS:
            return {loading: false, products: action.payload}
        case PRODUCTS_FAIL:
            return {loading: false, error: action.payload}
        default: return state
    }
}

export const getProducts = () => async(dispatch, getState) =>{

    try{
        dispatch(productsRequest())
        const {data} = await axios.get('/api/products')
        dispatch(productsSuccess(data))
    }
    catch(err){
        dispatch(productsFail(err))
    }
}





import axios from 'axios'
import {PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL} from '../action_types'
import {productDetailsRequest, productDetailsSuccess, productDetailsFail} from '../actions'


export const productDetailsReducer = (state = {product: {}}, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default: return state
    }
}

export const productDetails = (productId) => async(dispatch) => {
    try{
        dispatch(productDetailsRequest(productId))
        const {data} = await axios.get('/api/product/' + productId)
        dispatch(productDetailsSuccess(data))
    }
    catch(err){
        dispatch(productDetailsFail(err))
    }
}





import axios from 'axios'
import {PRODUCT_SAVE_REQUEST,PRODUCT_SAVE_SUCCESS,PRODUCT_SAVE_FAIL} from '../action_types'
import {saveProductRequest,saveProductSuccess,saveProductFail} from '../actions'

export const manageProductsReducer = (state = {product: {}}, action) => {
    switch(action.type){
        case PRODUCT_SAVE_REQUEST:
            return {loading: true}
        case PRODUCT_SAVE_SUCCESS:
            return {loading: false, success: true, product: action.payload}
        case PRODUCT_SAVE_FAIL:
            return {loading: false, isAdmin: false, error: action.payload}
        default: return state
    }
}

export const saveProduct = (product) => async(dispatch, getState) => {
    try{
        dispatch(saveProductRequest(product))
        const {signIn: {userInfo}} = getState()
        if(!product._id){
            const {data} = await axios.post('/api/products/create', product, {headers: {
                'Authorization': 'Bearer ' + userInfo.accessToken
            }})
            dispatch(saveProductSuccess(data))
        }
        else{
            const {data} = await axios.put(`/api/products/update/${product._id}`, product, {headers: {
                'Authorization': 'Bearer ' + userInfo.accessToken
            }})
            dispatch(saveProductSuccess(data))
        }
    }
    catch(err){
        dispatch(saveProductFail(err))
    }
} 
import axios from 'axios'
import {PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL} from '../action_types'
import {deleteProductRequest, deleteProductSuccess, deleteProductFail} from '../actions'

export const deleteProductReducer = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return {loading: true}
        case PRODUCT_DELETE_SUCCESS:
            return {loading: false, success: true, deletedProduct: action.payload}
        case PRODUCT_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default: return state
    }
}

export const deleteProduct = (id) => async(dispatch, getState) => {
    try{
        dispatch(deleteProductRequest())
        const {signIn: {userInfo}} = getState()
        const {data} = await axios.delete(`/api/products/delete/${id}`, {headers: {
            'Authorization': 'Bearer ' + userInfo.accessToken
        }})
        dispatch(deleteProductSuccess(data))

    }
    catch(err){
        dispatch(deleteProductFail(err))
    }
}

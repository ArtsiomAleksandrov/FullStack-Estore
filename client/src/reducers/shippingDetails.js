import {SAVE_SHIPPING} from '../action_types'
import {saveShippingDetails} from '../actions'

export const shippingDetailsReducer = (state = {shippingDetails: {}}, action) => {
    switch(action.type){
        case SAVE_SHIPPING:
            return {shippingDetails: action.payload}
        default: return state
    }
}

export const saveShipping = (shippingDetails) => (dispatch) => {
    dispatch(saveShippingDetails(shippingDetails))
}
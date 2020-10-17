import {PRODUCT_QUANTITY} from '../action_types'

export const productQtyReducer = (state = 1, action) => {
    switch(action.type){
        case PRODUCT_QUANTITY:
            return state = Number(action.payload)
        default: return state
    }
}
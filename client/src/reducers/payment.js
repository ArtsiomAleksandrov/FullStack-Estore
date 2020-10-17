import {PAYMENT_SUCCESS} from '../action_types'

export const paymentReducer = (state = {payments: []}, action) => {
    switch(action.type){
        case PAYMENT_SUCCESS:
            const payment = action.payload 
            return {payments: state.payments.concat(payment)}
        default:
            return state
    }
}


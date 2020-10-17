import axios from 'axios'
import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, SIGN_OUT} from '../action_types'
import {registerRequest, registerSuccess, registerFail} from '../actions'

export const registerReducer = (state = {}, action) => {
    switch(action.type){
        case REGISTER_REQUEST: 
            return {loading: true, data: action.payload}
        case REGISTER_SUCCESS:
            return {loading: false, newUserInfo: action.payload}
        case REGISTER_FAIL:
            return {loading: false, error: action.payload}
        case SIGN_OUT: 
        return {newUserInfo: ''}
        default: return state
    }
}

export const register = (name,email,password) => async(dispatch) => {
    try{
        dispatch(registerRequest(email, password))
        const {data} = await axios.post('/api/users/register', {name, email, password})
        dispatch(registerSuccess(data))
    }
    catch(err){
        dispatch(registerFail(err))
    }
}
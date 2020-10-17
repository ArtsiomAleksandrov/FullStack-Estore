import axios from 'axios'
import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT} from '../action_types'
import {signInRequest, signInSuccess, signInFail} from '../actions'


export const signInReducer = (state = {userInfo: ''}, action) => {
    switch(action.type){
        case SIGN_IN_REQUEST: 
            return {loading: true, data: action.payload}
        case SIGN_IN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case SIGN_IN_FAIL:
            return {loading: false, error: action.payload}
        case SIGN_OUT:
            return {userInfo: ''}
        default: return state
    }
}

export const signIn = (email,password) => async(dispatch) => {
    try{
        dispatch(signInRequest(email, password))
        const {data} = await axios.post('/api/users/signin', {email, password})
        dispatch(signInSuccess(data))
    }
    catch(err){
        dispatch(signInFail(err))
    }
}


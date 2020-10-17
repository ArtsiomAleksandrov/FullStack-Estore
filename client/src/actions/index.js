import {PPODUCTS_REQUEST, PRODUCTS_SUCCESS,PRODUCTS_FAIL,
        PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, 
        ADD_TO_CART, 
        PRODUCT_QUANTITY, 
        REMOVE_FROM_CART,
        SAVE_SHIPPING,
        EMPTY_CART,
        SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL,SIGN_OUT,
        REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, 
        ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL, 
        PRODUCT_SAVE_REQUEST,PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL,
        PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL,
        PAYMENT_SUCCESS}
from '../action_types'

export const productsRequest = () => {
    return {
        type: PPODUCTS_REQUEST
    }
}

export const productsSuccess = (productsData) => {
    return {
        type: PRODUCTS_SUCCESS,
        payload: productsData
    }
}

export const productsFail = (error) => {
    return {
        type: PRODUCTS_FAIL,
        error: error.message
    }
}

export const productDetailsRequest = (id) => {
    return{
        type: PRODUCT_DETAILS_REQUEST,
        payload: id
    }
}

export const productDetailsSuccess = (productDetails) => {
    return{
        type: PRODUCT_DETAILS_SUCCESS,
        payload: productDetails
    }
}

export const productDetailsFail = (error) => {
    return{
        type: PRODUCT_DETAILS_FAIL,
        payload: error.message
    }
}

export const productQuantity = (productQty) => {
    return {
        type: PRODUCT_QUANTITY,
        payload: productQty
    }
}

export const cartProduct = (data,qty) => {
    return{
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            inStock: data.inStock,
            qty            
        }
    }
}

export const removeFromCart = (id) => {
    return{
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const emptyCart = () => {
    return{
        type: EMPTY_CART
    }
}

export const signInRequest = (email,password) => {
    return {
        type: SIGN_IN_REQUEST,
        payload: {
            email,
            password
        }
    }
}

export const signInSuccess = (data) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: data
    }
}

export const signInFail = (err) => {
    return {
        type: SIGN_IN_FAIL,
        payload: err
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const registerRequest = (email,password) => {
    return {
        type: REGISTER_REQUEST,
        payload: {
            email,
            password
        }
    }
}

export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

export const registerFail = (err) => {
    return {
        type: REGISTER_FAIL,
        payload: err
    }
}


export const addProductRequest = (email,password) => {
    return {
        type: ADD_PRODUCT_REQUEST,
        payload: {
            email,
            password
        }
    }
}

export const addProductSuccess = (data) => {
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload: data
    }
}

export const addProductFail = (err) => {
    return {
        type: ADD_PRODUCT_FAIL,
        payload: err
    }
}

export const saveProductRequest = (product) => {
    return {
        type: PRODUCT_SAVE_REQUEST,
        payload: product
    }
}

export const saveProductSuccess = (data) => {
    return {
        type: PRODUCT_SAVE_SUCCESS,
        payload: data
    }
}

export const saveProductFail = (err) => {
    return {
        type: PRODUCT_SAVE_FAIL,
        payload: err
    }
}


export const deleteProductRequest = (product) => {
    return {
        type: PRODUCT_DELETE_REQUEST,
        payload: product
    }
}

export const deleteProductSuccess = (data) => {
    return {
        type: PRODUCT_DELETE_SUCCESS,
        payload: data
    }
}

export const deleteProductFail = (err) => {
    return {
        type: PRODUCT_DELETE_FAIL,
        payload: err
    }
}

export const saveShippingDetails = (data) => {
    return {
        type: SAVE_SHIPPING,
        payload: data
    }
}

export const paymentSuccess = (data) => {
    return {
        type: PAYMENT_SUCCESS,
        payload: data
    }
}
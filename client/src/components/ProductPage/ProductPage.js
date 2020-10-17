import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {productDetails} from '../../reducers/productDetails'
import {productQuantity} from '../../actions'
import {addToCart} from '../../reducers/cartReducers'
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Select from '../shared/Select'
import styles from './ProductPage.module.css'
import Loader from '../shared/Loader'

const ProductPage = (props) => {

    const fetching = useSelector(state => state.productDetails)
    const productQty = useSelector(state => state.productQty)
    const productId = props.location.pathname.split('/products/')[1]
    const {product, loading, error} = fetching
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productDetails(props.match.params.id))
    }, [props.match.params.id, dispatch])

    const handleCart = () => {
        dispatch(addToCart(productId, productQty))
        props.history.push(`/cart/${props.match.params.id}?qty=${productQty}`)
    }

    const handleClick = () => {
        props.history.goBack()
    }

    return (
        <div>
            {loading?
            <Loader/>:error?<div>Error: {error}</div>:
            <div className = {styles.productDetailsWrapper}>

                <div>
                    <Button onClick = {handleClick} variant="contained" className = 'back-btn' color="secondary" startIcon={<ArrowBack />}>
                        Back
                    </Button>
                </div>

                <h1 className = {styles.title}>{product.name}</h1>

                <div className = {styles.productDetails}>

                    <div className = {styles.productDetailsImage}>
                        <img src = {product.image} alt = 'product'></img>
                    </div>

                    <div className = {styles.productDetailsInfo}>
                        <h3>Product Info</h3>

                        <div className = {styles.table}>

                            <div className = {styles.tableFirstRow}>
                                <div><span>Price:</span> {product.price}</div>
                                <div><span>Category:</span>  {product.category}</div>
                                <div><span>InStock: </span>  {product.inStock}</div>
                            </div>

                            <div className = {styles.tableSecondRow}>
                                <div><b>Description: </b>  {product.description}</div>
                            </div>

                        </div>

                        <div className = {styles.tableAddToCart}>
                            <Select inStock = {product.inStock} helperText = {'Choose product quantity'} value = {productQty} onChange = {e => dispatch(productQuantity(e.target.value))}/>
                            <Button className = {styles.btnAddToCart} onClick = {handleCart} variant="contained" color="secondary" 
                                    style = {{borderRadius: '1rem', 
                                                textTransform: 'capitalize', 
                                                fontWeight: 'lighter',
                                                textAlign: 'center',
                                                marginLeft: '2rem'}} >
                            Add To Cart
                            </Button>
                        </div>

                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ProductPage
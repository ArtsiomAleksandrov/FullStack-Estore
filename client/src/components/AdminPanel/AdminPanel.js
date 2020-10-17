import React, {useState,useEffect} from 'react'
import styles from './AdminPanel.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {saveProduct} from '../../reducers/manageProducts'
import {deleteProduct} from '../../reducers/deleteProduct'
import {getProducts} from '../../reducers/products'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack'
import AddIcon from '@material-ui/icons/Add';
import Table from './Table'
import Loader from '../shared/Loader'

const AdminPanel = (props) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [description, setDescription] = useState('')
    const [inStock, setInStock] = useState('')
    const [id, setId] = useState('')

    const [panelVisibility, setPanelVisibility] = useState(false)


    const dispatch = useDispatch()
    const productList = useSelector(state => state.products)
    const {loading} = productList

    const productSave = useSelector(state => state.manageProducts)
    const {success: saveSuccess} = productSave

    const productDelete = useSelector(state => state.deleteProduct) 
    const {success: deleteSuccess} =  productDelete

    const signIn = useSelector(state => state.signIn)
    const {userInfo} = signIn

    useEffect(() => {
    if(saveSuccess){
        setPanelVisibility(false)
    }
    dispatch(getProducts())

    },[dispatch,saveSuccess, deleteSuccess])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveProduct({name,price,image,category,
        brand,description,inStock, _id: id}))
    }

    const handleDelete = (product) => {
        dispatch(deleteProduct(product._id))
    }

    const handleClick = () => {
        props.history.push('/')
    }

    const showPanel = (product) => {

        setPanelVisibility(true)

        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setCategory(product.category)
        setBrand(product.brand)
        setDescription(product.description)
        setInStock(product.inStock)
        setId(product._id)
    }

    return (
        <div>
        {userInfo.isAdmin?
        <div>
        <div className = {styles.adminContent}>
        
        <Button onClick = {handleClick} variant="contained" className = {styles.backBtn} color="secondary" startIcon={<ArrowBack />}>
            Back
        </Button>

        {loading?<Loader/>:!panelVisibility && 
        <div className = {styles.tableWrapper}>
            <div className = {styles.tableHeader}>
                <h3>Products</h3>
                <Button onClick = {() => showPanel({})} variant="contained" className = {styles.createProductBtn} color="secondary" startIcon={<AddIcon />}>
                        Create Product
                </Button>
            </div>
            <Table editProduct = {showPanel} deleteProduct ={handleDelete}/>
        </div>}

        </div>

        {panelVisibility &&
            <div className = {styles.formWrapper}>
            <h1 className = {styles.formTitle}>{id?'Edit product':'Create product'}</h1>
                    <form onSubmit = {handleSubmit}>
                    <input placeholder = 'Name' value = {name} onChange = {e => setName(e.target.value)} id = 'email' name = 'email' className = 'form input-email'></input>
                    <input placeholder = 'Price' value = {price} onChange = {e => setPrice(e.target.value)} className = 'form input-password'></input>
                    <input placeholder = 'Image' value = {image} onChange = {e => setImage(e.target.value)} className = 'form input-password'></input>
                    <input placeholder = 'Category' value = {category} onChange = {e => setCategory(e.target.value)} className = 'form input-password'></input>
                    <input placeholder = 'Brand' value = {brand} onChange = {e => setBrand(e.target.value)} className = 'form input-password'></input>
                    <input placeholder = 'Description' value = {description} onChange = {e => setDescription(e.target.value)} className = 'form input-password'></input>
                    <input placeholder = 'InStock' value = {inStock} onChange = {e => setInStock(e.target.value)} className = 'form input-password'></input>
                    <Button type = 'submit' style = {{borderRadius: '1rem', textTransform: 'capitalize', fontWeight: 'lighter'}}variant="contained" color="secondary">
                        {id?'Edit':'Create'}
                    </Button>
                <Button style = {{textTransform: 'capitalize'}} onClick = {() => setPanelVisibility(false)} variant="contained" color="primary">Back</Button>
            </form>
        </div>}

        </div>:<h2 className = {styles.title}>You need to sign in as admin to create products</h2>}
        </div>
    )
}

export default AdminPanel
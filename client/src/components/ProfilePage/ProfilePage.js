import React from 'react'
import {useSelector} from 'react-redux'
import styles from './ProfilePage.module.css'
import Table from './Table'
const ProfilePage = () => {

    const payment = useSelector(state => state.payment) 
    const signIn = useSelector(state => state.signIn)

    const {userInfo} = signIn

    return(
        <div>
            <div className = {styles.wrapper}>
                {userInfo?<div>
                    <h2 className = {styles.title}>Profile Page</h2>
                <Table payment = {payment}/>
                </div>:<h2 className = {styles.title}>Sign in to see profile page</h2>
                }
            </div>
        </div>
    )
}


export default ProfilePage
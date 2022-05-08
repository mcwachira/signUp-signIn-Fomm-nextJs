import React from 'react'
import classes from './verifyEmail.module.css'
import { useAuthValue } from '../../context/Authcontext'

// enables us to get the email of the user who sign up

const VerifyEmail = () => {
    const { currentUser } = useAuthValue()
    return (
        <div className={classes.container}>

            <h1>
                Verify your Email Address

            </h1>

            <h3> A verification Email has  been sent to :  {currentUser?.email}</h3>


            <p> Follow instructions in your email to verify your account</p>

            <button className={classes.resendEmail}> Resend Email </button>
        </div>
    )
}

export default VerifyEmail
import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase/firebase'
import { sendEmailVerification } from 'firebase/auth'
import classes from './verifyEmail.module.css'
import { useAuthValue } from '../../context/Authcontext'
import { useRouter } from 'next/router'

// enables us to get the email of the user who sign up

const VerifyEmail = () => {

    const [time, setTime] = useState(60);
    const { timeActive, setTimeActive } = useAuthValue()
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const { currentUser } = useAuthValue();
    const router = useRouter()


    // useEffect(() => {
    //     let interval = null;
    //     if (timeActive && time !== 0) {

    //         //count down from 60s
    //         interval = setInterval(() => {
    //             setTime((time) => time - 1);
    //         }, 1000)
    //     } else if (time === 0) {
    //         setTimeActive(false)
    //         setTime(60)
    //         clearInterval(interval)
    //     } else if (verified === true) {
    //         router.push('/')
    //     }
    //     return () => clearInterval(interval)
    // }, [time, timeActive, setTimeActive])

    useEffect(() => {
        const interval = setInterval(() => {
            currentUser?.reload().then(() => {
                if (currentUser?.emailVerified) {
                    clearInterval(interval)
                    router.push('/')
                }
            }).catch((error) => console.log('error:', error))
        })
    }, [router, currentUser])

    const resendEmailVerification = () => {
        setButtonDisabled(true);
        sendEmailVerification(auth.currentUser).then(() => {
            setButtonDisabled(false)
            setTimeActive(true)
        }).catch((error) => {
            console.log('error:', error)

            setButtonDisabled(false)

        }
        )
    }




    return (
        <div className={classes.container}>

            <h1>
                Verify your Email Address

            </h1>

            <h3> A verification Email has  been sent to :  {currentUser?.email}</h3>


            <p> Follow instructions in your email to verify your account</p>

            <button className={classes.resendEmail} onClick={resendEmailVerification}
                disabled={timeActive}> Resend Email {timeActive && time} </button>
        </div>
    )
}

export default VerifyEmail
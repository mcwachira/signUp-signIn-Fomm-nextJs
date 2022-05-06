
import classes from './SignUp.module.css'
import { Fragment, useState } from "react"
import Image from 'next/image'

const SignUp = () => {
    return (
        <Fragment>

            <div className={classes.container}>
                <div className={classes.form}>


                    <div className={classes.title}>

                        Welcome
                    </div>
                    <div className={classes.subtitle}>
                        Lets create Your Account!
                    </div>

                    <div className={classes.inputContainer}>

                        <input type="text" name="name" id="firstName" className={classes.input} placeholder="First Name" />
                    </div>

                    <div className={classes.inputContainer}>

                        <input type="text" name="name" id="LastName" className={classes.input} placeholder="Last Name" />
                    </div>

                    <div className={classes.inputContainer}>

                        <input type="email" name="name" id="Email" className={classes.input} placeholder="Email" />
                    </div>


                    <div className={classes.inputContainer}>

                        <input type="password" name="name" id="Password" className={classes.input} placeholder="Password" />
                    </div>

                    <button type='submit'> Submit</button>
                </div>



            </div>


        </Fragment>
    )
}

export default SignUp
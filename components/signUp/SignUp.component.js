
import classes from './SignUp.module.css'
import { Fragment, useState } from "react"
import Image from 'next/image'

const SignUp = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });


    const handleChange = (e) => {
        setFormData(initialState => ({
            ...initialState,
            [e.target.name]: e.target.value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('First name :', formData.firstName)
        console.log('Last name :', formData.lastName)
        console.log('Email :', formData.email)

    }
    return (
        <Fragment>

            <div className={classes.container}>

                <div className={classes.imageContainer}>

                    <img src="./images/undraw_launch_day_4e04.svg" alt="austronaut" className={classes.image} />
                </div>
                <div className={classes.form}>


                    <div className={classes.title}>

                        Welcome
                    </div>
                    <div className={classes.subtitle}>
                        Lets create Your Account!
                    </div>

                    <form action="" onSubmit={handleSubmit}>
                        <div className={classes.inputContainer}>

                            <input type="text" name="firstName" className={classes.input} placeholder="First Name" value={formData.firstName || ""} onChange={handleChange} required />
                        </div>

                        <div className={classes.inputContainer}>

                            <input type="text" name="lastName" className={classes.input} placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                        </div>

                        <div className={classes.inputContainer}>

                            <input type="email" name="email" className={classes.input} placeholder="Email" value={formData.email} onChange={handleChange} required />
                        </div>


                        <div className={classes.inputContainer}>

                            <input type="password" name="password" className={classes.input} placeholder="Password" value={formData.password} onChange={handleChange} required />
                        </div>

                        <button className={classes.button} type='submit'> Submit</button>
                    </form>


                </div>



            </div>


        </Fragment>
    )
}

export default SignUp
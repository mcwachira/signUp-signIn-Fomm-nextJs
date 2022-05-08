
import classes from './SignUp.module.css'
import { Fragment, useState } from "react"

import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useRouter } from 'next/router'
import { AuthProvider, useAuthValue } from '../../context/Authcontext'
import Image from 'next/image'

const SignUp = () => {


    const router = useRouter()
    const { setTimeActive } = useAuthValue()

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


    const handleSubmit = async (e) => {
        e.preventDefault();
        // formData.firstName, formData.lastName,

        createUserWithEmailAndPassword(auth, formData.email, formData.password).then((res) => {
            sendEmailVerification(auth.currentUser)

            console.log(res.user)
        }).then(() => {
            setTimeActive(true)
            router.push('/verify')
        }).catch((error) => console.log('error:', error))
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        }

        // console.log('First name :', formData.firstName )
        // console.log('Last name :', formData.lastName)
        // console.log('Email :', formData.email)

        console.log(data)

        //sends data to our server in json format

        const JsonData = JSON.stringify(data);

        //api endpoint to send our data
        const endpoint = 'api/form';

        //Form request for sending data
        const options = {
            //POST method to send data to our server 
            method: 'POST',
            //Tell the server the type of dat we are sending
            headers: {
                'Content-Type': 'application/json'
            },

            //Body of the request is the data we are sending
            body: JsonData,
        }
        //send the form to via the api to the server
        const response = await fetch(endpoint, options);

        //get a response showing that the form submission worked]
        const result = await response.json()
        alert(`Your from data: ${result.data}`)


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

                    <form action="/api/form" method='post' onSubmit={handleSubmit}>
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

                        <div className={classes.signupButtons}>

                            <button className={classes.button} type='submit'> Sign Up</button>
                            <button className={`${classes.button} ${classes.googleButton}`} type='submit'> Sign Up with Google</button>


                        </div>
                    </form>


                </div>



            </div>


        </Fragment>
    )
}

export default SignUp
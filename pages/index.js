import Head from 'next/head'
import Image from 'next/image'
import SignIn from '../components/signIn/SignIn.component'
import SignUp from '../components/signUp/SignUp.component'

import classes from '../styles/Home.module.css'

import { useAuthValue } from '../context/Authcontext'



export default function Home() {
  const currentUser = useAuthValue()

  return (

    <>

      <div className={classes.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="SignUp Sign In App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>




      </div>


      <div className={classes.successContainer}>

        <h1 className={classes.success}>

          Thank you  {currentUser?.email} for Sign up
        </h1>
      </div>


    </>

  )
}

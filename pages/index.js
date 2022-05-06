import Head from 'next/head'
import Image from 'next/image'
import SignIn from '../components/signIn/SignIn.component'
import SignUp from '../components/signUp/SignUp.component'
SignIn
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="SignUp Sign In App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignUp />
      {/* <SignIn /> */}
    </div>
  )
}

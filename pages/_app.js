import '../styles/globals.css'
import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from '../context/Authcontext';

function MyApp({ Component, pageProps }) {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])
  return (
    <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>

      <Component {...pageProps} />)

    </AuthProvider>

  )
}

export default MyApp

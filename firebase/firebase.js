import { initializeApp } from 'firebase/app';

//enables us to have sign up and sign in capabilities
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCgFny4LoctGFIsk1oPNDwy5vmITB0FGrs",
    authDomain: "nextjs-signup-sign-project.firebaseapp.com",
    projectId: "nextjs-signup-sign-project",
    storageBucket: "nextjs-signup-sign-project.appspot.com",
    messagingSenderId: "393253449491",
    appId: "1:393253449491:web:315d23c2846069f73174e6",
    measurementId: "G-TE5MZBTTR4"
}

//initialize firebase

const app = initializeApp(firebaseConfig);

//initializing firebase configuration for our app
const auth = getAuth(app);

export { auth };
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVOZ2RIDyxvrZq41n0iDerNsNW-rh75IM",
  authDomain: "netflix-clone-leandro.firebaseapp.com",
  projectId: "netflix-clone-leandro",
  storageBucket: "netflix-clone-leandro.appspot.com",
  messagingSenderId: "734599537604",
  appId: "1:734599537604:web:d580665506d892695bba91"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
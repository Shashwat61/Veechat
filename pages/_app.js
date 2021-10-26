/* eslint-disable react/react-in-jsx-scope */
import '../styles/index.css'
import firebase from 'firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../firebase'
import Login from './login'
import {db} from '../firebase'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [user,loading]=useAuthState(auth)
  const router=useRouter()
  // console.log(user)
  useEffect(async()=>{
    if(user){
      router.push('/')
      db.collection('users').doc(user?.uid).set({
        email:user?.email,
      name:user?.displayName,
      lastSeen:firebase.firestore.FieldValue.serverTimestamp(),
      photoURL:user?.photoURL,
    },{merge:true}
    )
  } else router.push('/login') 
  },[user])

  if(!user) return <Login/>
  return <Component {...pageProps} />
}

export default MyApp

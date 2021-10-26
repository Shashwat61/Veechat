import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGERSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
  };

  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app()

  const db=app.firestore()
  const auth=app.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {db,auth,provider}
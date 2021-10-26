/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import {auth,provider} from '../firebase'
import chatbg from '../assets/images/chatbg2.png'
import Image from 'next/image'
import {useRouter} from 'next/router'
function Login() {
    const router=useRouter()
    
    function signIn(){
        auth.signInWithPopup(provider).catch(alert)
        // router.push('/')
    }
    return (
        <div className="grid h-screen place-items-center bg-bgchat">
            <Head>
                <title>Login</title>
            </Head>
            <div className="grid p-10 text-gray-100 rounded-md sm:p-16 place-items-center bg-graylight drop-shadow-lg">
            <Image className="rounded-full" height="200px" width="200px" src={chatbg} alt=""/>
           <button onClick={signIn} className="px-4 py-2 mt-6 text-sm rounded-md cursor-pointer sm:text-base bg-graydark hover:opacity-80 focus:outline-none">Sign In With Google</button> 
            </div>
        </div>
    )
}

export default Login

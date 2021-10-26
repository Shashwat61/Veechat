/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"
import moment from 'moment'

function  Message({user, message}) {
    const [userLoggedIn]=useAuthState(auth)
    const [isSender,setIsSender]=useState(true)
    // console.log(userLoggedIn)
    useEffect(()=>{
        user === userLoggedIn.email ? setIsSender(true):setIsSender(false)
    },[message])

    return (
        <div className={ isSender ? 'user' : 
        'receiver'}>
            {/* <img className="" src='{}' alt=""/> */}

            <div className="flex">
            <p className={ isSender ? 'rounded-md  bg-blue-600 sm:p-2 p-1  h-[max-content]' : ' bg-graylight p-1 sm:p-2 max-h-[max-content] rounded-md'}>{message?.message}
            <span className="text-[10px] flex justify-end self-baseline">{message?.timestamp ? moment(message?.timestamp).format('LT'): '...'}</span>
            </p>
            </div>
        </div>
    )
}

export default Message

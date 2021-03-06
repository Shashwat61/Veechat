/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase"
import moment from 'moment'
import {CheckIcon} from '@heroicons/react/solid'
import { useCollection } from "react-firebase-hooks/firestore"
import getRecepientEmail from "../utils/getRecepientEmail"

function check(recipient, active){
 
    const bool=Math.floor(Math.abs(new Date() - recipient?.lastSeen?.toDate())/1000/60/24) 
    
    if(bool<=1 && active===false){
        return (
            <>
            <CheckIcon className="w-2 h-2 text-blue-500"/>
            <CheckIcon className="w-2 h-2 text-blue-500"/>
            </>
        )
    }
    // user has been online for less than a day or day
    else if(bool<=1){
        return (
            <>
        <CheckIcon className="w-2 h-2 " />
        <CheckIcon className="w-2 h-2 " />
        </>
        )
    }
    // if user hasn't been online since more than 1 day
    else {
        return (
            <>
            <CheckIcon className="w-2 h-2 p-0 m-0" />
            </>
        )
    }
}

function  Message({user, message, users}) {
    // console.log(user)
    const [userLoggedIn]=useAuthState(auth)
    const [isSender,setIsSender]=useState(true)
    const [recipientSnapshot] = useCollection(db.collection('users').where('email', '==', getRecepientEmail(users, userLoggedIn)))
    const [active, setActive]=useState(false)
    const recipient=recipientSnapshot?.docs?.[0]?.data()   
   
    
    useEffect(()=>{
        if(user === userLoggedIn.email) { 
            setIsSender(true)
            setActive(false) 
        }
        else {
            setIsSender(false)
            setActive(true)
            
        }
        
    },[message])
    // console.log(message)
    
    // console.log(isSender)
    // console.log(active)
    
    return (
        <div className={ isSender ? 'user' : 
        'receiver'}>
            {/* <img className="" src='{}' alt=""/> */}

            <div className="flex">
            <p className={ !isSender ? ' rounded-md  bg-blue-600 sm:p-2 p-1  h-[max-content]' : ' bg-graylight p-1 sm:p-2 max-h-[max-content] rounded-md'}>{message?.message}
             <span className="text-[10px] flex justify-end self-baseline">
             {/* {message?.timestamp ? moment(message?.timestamp).format('LT'): '...'}  */}
            {isSender && check(recipient,active)
            }
            </span> 
        
            </p>
            </div>
        </div>
    )
}

export default Message

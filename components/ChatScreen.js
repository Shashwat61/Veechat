/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { auth, db } from "../firebase"
import Message from "./Message"
import {PaperAirplaneIcon, ArrowLeftIcon} from '@heroicons/react/solid'
import { useRef, useState } from "react"
import firebase from 'firebase'
import getRecepientEmail from "../utils/getRecepientEmail"
import TimeAgo from 'react-timeago'

function ChatScreen({chat, messages}) {
   
    // console.log(messages)
    
    const [user]=useAuthState(auth)
    const router=useRouter()
    const [input,setInput]=useState('')
    const scrolltoEnd=useRef(null)
    const [messagesSnapshot]=useCollection(db.collection("chats").doc(router.query.id).collection("messages").orderBy("timestamp", "asc"))
    const [recipientSnapsot]=useCollection(db.collection('users').where('email', '==', getRecepientEmail(chat?.users, user)))
    
    
    function showMessages(){
            <div className="flex">
                <img className="w-4 h-4" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>
        </div>
        if(messagesSnapshot){
            return messagesSnapshot?.docs?.map(message=>(
                <Message key={message?.id} user={message?.data().user}
                message={{...message?.data(), timestamp:message?.data().timestamp?.toDate().getTime()}} users={chat?.users}
                />
                ))
            } else {
            return JSON.parse(messages)?.map(message=>(
                <Message key={message.id} user={message.user}
                message={message} users={chat?.users}
                />
                
                ))
            }
        }

        function sendMessage(e){
            e.preventDefault()
       if(input.length>0 && input.charAt(0)!==" "){
           
           db.collection("users").doc(user?.uid).set({
               lastSeen:firebase.firestore.FieldValue.serverTimestamp(),
            },{merge:true})
            
            db.collection("chats").doc(router.query.id).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user:user.email,
            photoURL: user.photoURL
        })
    }  
    setInput('')
    scrollToBottom()
}

function keyDown(e){
    if(e.key==" " && input.length==0 ) e.preventDefault()
}

const scrollToBottom=()=>{
    scrolltoEnd.current.scrollIntoView({
        behavior:'smooth',
        block:'start'
    })
}

const recipient=recipientSnapsot?.docs?.[0]?.data()
const recipientEmail=getRecepientEmail(chat?.users, user)

const bool=Math.floor(Math.abs(new Date() - recipient?.lastSeen?.toDate())/1000/60) < 1
console.log(bool)
    return ( 
        <div className="text-xs text-gray-200 sm:text-base ">
            {/* header */}
            <div className="flex items-center px-4 py-2 border-b border-graylight">
                <div onClick={()=>router.push('/')} className="mr-4 sm:hidden">
                    <ArrowLeftIcon className="w-4 h-4 cursor-pointer" />
                </div>
                <img className="w-10 h-10 rounded-md" src={recipient ?recipient?.photoURL : `https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg`} alt=""/>
                <div className="pl-4">
                <p className="font-semibold ">{recipient ? recipient?.name : recipientEmail}</p>
                 
                    
                {recipientSnapsot ? (
                    <span className="text-xs sm:text-sm">
                     Last Seen:{" "} { !bool ? <TimeAgo date={recipient?.lastSeen?.toDate()} /> :'online'}</span>
                        ):(
                            <span className="text-xs md:text-sm">Loading</span>
                        )
                }
                </div>
            </div>
            {/* messagecontainer */}
            <div   className="pl-4 h-[78vh] my-1 overflow-y-scroll overflow-hidden px-2 ">
                {showMessages()}
                <div ref={scrolltoEnd} className="my-[80px]" />
            </div>
            {/* input */}
            
                <form className="px-4 py-2" onSubmit={sendMessage}>
                    <div className="flex items-center justify-between p-2 rounded-md bg-graylight">
                    <input value={input} onKeyDown={keyDown} onChange={(e)=>setInput(e.target.value)} className="flex-1 text-xs bg-transparent border-none sm:text-base focus:outline-none" type="text" placeholder="Message" />
                    <button type="submit" >
                    <PaperAirplaneIcon className="h-6 transform rotate-90 " />
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default ChatScreen

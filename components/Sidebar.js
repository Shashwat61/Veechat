/* eslint-disable react/react-in-jsx-scope */
import {ArrowDownIcon,PlusIcon, XIcon, DotsHorizontalIcon,SearchIcon} from '@heroicons/react/solid'
import * as EmailValidator from 'email-validator';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db, provider } from '../firebase';
import Chat from './Chat';

export function CreateModal(){
   return (
       <div className="h-screen bg-gray-400 opacity-50">
           <h1>Hello</h1>
       </div>
   )
}
function Sidebar() {
    
    const [user]=useAuthState(auth)
    const router=useRouter()
    const userChatRef=user && db.collection('chats').where('users','array-contains', user?.email)
    const [showSignOutModal,setShowModalSignOut]=useState(false)
    const [showModal, setShowModal]=useState(false)
    const [chatsSnapshots]=useCollection(userChatRef)
    const [email,setEmail]=useState('')
    
    const checkChatAlreadyExists=(recepientEmail)=>
       !!chatsSnapshots?.docs?.find(chat=>chat.data().users.find(user=>user===recepientEmail)?.length>0);
    
       
    function createChat(e){
        e.preventDefault()
           
        const input=email
        if(!input) return null
        if(EmailValidator.validate(input) && !checkChatAlreadyExists(input) &&  input!=user?.email ){
            // we need to add chat and check if it already exists
            try {
                db.collection('chats').add({
                    users:[user.email, input]
                })
                // addDoc(collection(db,'chats'),{
                //     users:[user?.email, input]
                // })
            } 
            catch (error) {
             alert(error)    
            }
        }
        setShowModal(!showModal)
        setEmail('')
    }

    function keyDown(e){
        if(e.key==" " && email.length==0 ) e.preventDefault()
    }
    
    
    return (
        <div className="relative h-screen p-4 overflow-y-scroll text-gray-100 border-r sm:flex-auto border-graylight bg-graydark">
        
        <div className="flex items-center justify-between p-2 rounded-md bg-graylight">
            {/* user */}
            <div className="flex items-center">
                <div className="cursor-pointer ">
                    <img className="w-8 h-8 rounded-md sm:h-10 sm:w-10 " src={user ? user?.photoURL : user?.displayName.charAt(0)}alt=""/>
                </div>
                <h3 className="px-4 text-xs sm:text-base">{user?.displayName}</h3>
            </div>

            <div className="relative">
            <DotsHorizontalIcon onClick={()=>setShowModalSignOut(!showSignOutModal)} 
            className="w-4 h-4 cursor-pointer focus:outline-none text-gray-50" />
            <div onClick={()=>auth.signOut()} className={showSignOutModal ? ' transition-all ease-in-out duration-200 cursor-pointer animate-pulse bg-graylight shadow-lg  p-2 z-50 rounded-md drop-shadow-lg w-max right-0 top-5 text-xs sm:text-sm absolute block':'hidden'}>Sign out</div>
            </div>
        </div>

            {/* search */}
            <div className="flex items-center justify-between p-2 mt-4 border rounded-md shadow-lg bg-graydark border-graylight drop-shadow-lg ">
                <input type="text" className="flex-1 p-1 text-xs bg-transparent border-none sm:text-base focus:outline-none" placeholder="Search" />
                <SearchIcon className="h-4" />
            </div>
            {/* chats */}
            <div className="px-2 mt-12 ">
                <div className="flex items-center text-gray-200 ">
                    <p className="mr-2 text-xs font-semibold sm:text-sm ">Friends</p>
                    <ArrowDownIcon className="h-4 pt-1" />
                </div>

                    <form onSubmit={createChat} className={showModal ? " flex items-center mt-4 border rounded-md shadow-lg p-2  border-graylight drop-shadow-lg":"hidden"}><input className="w-full p-1 text-xs bg-transparent sm:text-base focus:outline-none" type="text" placeholder="Enter friend's email" value={email} onKeyDown={keyDown} onChange={(e)=>setEmail(e.target.value)} />
                    <button type="submit">
                        <PlusIcon className="h-5 mx-1"/>
                    </button >
                    </form>
                {/* container div */}
                <div className="my-8 overflow-y-scroll max-h-56">
                {
                    chatsSnapshots?.docs.map((chat,i)=>(
                        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
                        ))
                    }
                    </div>
                    {/* addfriend*/}
                <div  onClick={()=>setShowModal(!showModal)} className="mt-4 ">
                    <div  className="flex items-center p-2 border rounded-md shadow-lg cursor-pointer w-max hover:bg-graylight focus:bg-graylight bg-graydark border-graylight drop-shadow-lg">
                    {!showModal ? (
                        <PlusIcon className="h-5" />
                        
                    ):(
                        <XIcon className="h-5"/>

                    )}

                    <p className="mx-3 text-xs sm:text-base">{!showModal ? 'Add Friends':'Cancel'}</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar

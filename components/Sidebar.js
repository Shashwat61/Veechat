/* eslint-disable react/react-in-jsx-scope */
import {ArrowDownIcon,PlusIcon, DotsHorizontalIcon,SearchIcon} from '@heroicons/react/solid'
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
    
    const checkChatAlreadyExists=(recepientEmail)=>
       !!chatsSnapshots?.docs?.find(chat=>chat.data().users.find(user=>user===recepientEmail)?.length>0);
    
       
    function createChat(){
         setShowModal(!showModal)        
        // const input=prompt('Please enter the email for the user you want to chat with')
        // if(!input) return null
        // if(EmailValidator.validate(input) && !checkChatAlreadyExists(input) &&  input!=user?.email ){
        //     // we need to add chat and check if it already exists
        //     try {
        //         db.collection('chats').add({
        //             users:[user.email, input]
        //         })
        //         // addDoc(collection(db,'chats'),{
        //         //     users:[user?.email, input]
        //         // })
        //     } 
        //     catch (error) {
        //      alert(error)    
        //     }
        // }
    }
    function showSignOut(){
      setShowModalSignOut(!showSignOutModal)    
    }
    function signOut(){
        // router.push('/')
        auth.signOut()
        // router.replace('/login')
    }
    
    
    return (
        <div className="relative h-screen p-4 text-gray-100 border-r sm:flex-auto border-graylight bg-graydark">
         <div className={showModal ? 'block':'hidden'}>
         </div>   
        <div className="flex items-center justify-between p-2 rounded-md bg-graylight">
            {/* user */}
            <div className="flex items-center">
                <div className="cursor-pointer ">
                    <img className="w-10 h-10 rounded-full " src={user ? user?.photoURL : user?.displayName.charAt(0)}alt=""/>
                </div>
                <h3 className="px-4">{user?.displayName}</h3>
            </div>

            <div className="relative">
            <DotsHorizontalIcon onClick={showSignOut} 
            className="w-4 h-4 cursor-pointer focus:outline-none text-gray-50" />
            <div onClick={signOut} className={showSignOutModal ? ' transition-all ease-in-out duration-200 cursor-pointer animate-pulse bg-graylight shadow-lg  p-2 z-50 rounded-md drop-shadow-lg w-max right-0 top-5 text-base absolute block':'hidden'}>Sign out</div>
            </div>
        </div>

            {/* search */}
            <div className="flex items-center justify-between p-2 mt-4 border rounded-md shadow-lg bg-graydark border-graylight drop-shadow-lg ">
                <input type="text" className="flex-1 p-1 text-sm bg-transparent border-none focus:outline-none" placeholder="Search" />
                <SearchIcon className="h-4" />
            </div>
            {/* chats */}
            <div className="px-2 mt-16 ">
                <div className="flex items-center text-gray-200 ">
                    <p className="mr-2 text-sm font-semibold ">Friends</p>
                    <ArrowDownIcon className="h-4 pt-1" />
                </div>

                {/* container div */}
                <div className="my-8 overflow-hidden overflow-y-scroll max-h-56">
                {
                    chatsSnapshots?.docs.map((chat,i)=>(
                        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
                        ))
                    }
                    </div>
                <div  onClick={createChat} className="mt-4 text-sm ">
                    <div  className="flex items-center p-2 border rounded-md shadow-lg cursor-pointer w-max hover:bg-graylight focus:bg-graylight bg-graydark border-graylight drop-shadow-lg">
                    <PlusIcon className="h-5" />

                    <p className="mx-3">Add Friends</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar

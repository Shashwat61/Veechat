/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import ChatScreen from '../../components/ChatScreen'
import Sidebar from '../../components/Sidebar'
import {auth, db} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import getRecepientEmail from '../../utils/getRecepientEmail'

function Chat({chat,messages}) {
    console.log(messages)
    const [user]=useAuthState(auth)
    
    return (
        <div className="flex bg-bgchat">
            <Head>
                <title>Chat with {getRecepientEmail(chat?.users, user)}</title>
            </Head>
            <div className="hidden sm:flex-[0.3] sm:flex">
            <Sidebar/>
            </div>

            {/* chatcontainer */}
         <div className="w-full sm:flex-[0.8] h-screen overflow-hidden overflow-y-scroll ">
           <ChatScreen chat={chat} messages={messages} />
         </div> 
        </div>
    )
}

export default Chat

export  async function getServerSideProps(context){
    const ref=db.collection('chats').doc(context.query.id)
    // prep the messages on the server
    
    const messagesRes=await ref.collection("messages").orderBy("timestamp","asc")
    .get()

    const messages=messagesRes?.docs?.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    })).map(messages=>({
        ...messages,
        timestamp: messages?.timestamp.toDate().getTime(),
    }))

    
    // prep the chats
    const chatRes=await ref.get();
    
    const chat={
        id:chatRes.id,
        ...chatRes.data()
    }

    

    return {
        props:{
            messages: JSON.stringify(messages),
            chat
        }
    }
    
}
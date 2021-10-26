import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { auth, db } from "../firebase"
import getRecepientEmail from "../utils/getRecepientEmail"

/* eslint-disable react/react-in-jsx-scope */
function Chat({id, users}) {
    const router=useRouter()
    const [user]=useAuthState(auth)
    const [recipientSnapshot] = useCollection(db.collection('users').where('email', '==', getRecepientEmail(users, user)))

    const recipient=recipientSnapshot?.docs?.[0]?.data()
    
    const recipientEmail=getRecepientEmail(users, user)
        
    const enterChat=()=>{
        router.push(`/chat/${id}`)
    }
    
    return (
        <div onClick={enterChat} className="flex items-center p-2 my-4 text-xs transition-all duration-100 ease-in rounded-md cursor-pointer md:text-sm hover:bg-graylight">
            {
                recipient ? (
                    <img className="w-8 h-8 rounded-md md:w-12 md:h-12 " src={recipient?.photoURL} alt="user"/>
                ):(
                    <img className="w-10 h-10 rounded-full" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>

                    )
            }
            <p className="pl-3 overflow-hidden whitespace-pre-wrap overflow-ellipsis">{recipient?.name || recipientEmail}</p>
        </div>
    )
}

export default Chat

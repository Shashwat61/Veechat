import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { auth, db } from "../firebase"
import getRecepientEmail from "../utils/getRecepientEmail"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

/* eslint-disable react/react-in-jsx-scope */
function Chat({id, users}) {
    // console.log(users)
    const router=useRouter()
    const [user]=useAuthState(auth)
    const [recipientSnapshot] = useCollection(db.collection('users').where('email', '==', getRecepientEmail(users, user)))
    // console.log(recipientSnapshot?.docs?.map(item=>item.data()))

    const recipient=recipientSnapshot?.docs?.[0]?.data()
    const bool=Math.floor(Math.abs(new Date() - recipient?.lastSeen?.toDate())/1000/60) < 2
    // console.log(bool)
    // console.log(new Date().toLocaleString())
    
    const recipientEmail=getRecepientEmail(users, user)
    // console.log(recipientEmail)
        
    const enterChat=()=>{
        router.push(`/chat/${id}`)
    }
    
    return (
        <div onClick={enterChat} className="relative flex items-center p-2 my-4 text-xs transition-all duration-100 ease-in rounded-md cursor-pointer sm:text-base hover:bg-graylight">
            {
                recipient ? (
                    <>
                    <img className="w-8 h-8 rounded-md sm:w-10 sm:h-10 " src={recipient?.photoURL} alt="user"/>
                    {bool &&

                        <div className="absolute w-2 h-2 bg-green-300 rounded-full sm:w-3 sm:h-3 left-8 sm:left-10 bottom-2">
                    </div>
                    }

                    </>
                ):(
                    <>
                    <img className="w-8 h-8 rounded-full" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>
                    {bool &&

                        <div className="absolute w-2 h-2 bg-green-300 rounded-full sm:w-3 sm:h-3 left-8 sm:left-10 bottom-2">
                        </div>
}
                    </>

                    )
            }
            <p className="pl-3 overflow-hidden whitespace-pre-wrap overflow-ellipsis">{recipient?.name || recipientEmail}</p>
        </div>
    )
}

export default Chat

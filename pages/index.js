/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import chatbg from '../assets/images/chatbg2.png'
export default function Home() {
  return (
    <div className="h-screen bg-bgchat">
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div className="flex-1 sm:flex-[0.38]">
        <Sidebar />
        </div>

        <div className="hidden text-sm sm:text-base text-gray-300 font-semibold  xs:flex-[1] xs:flex xs:flex-col xs:items-center xs:justify-center" >
             <Image className="rounded-full" src={chatbg} height="200px" width="200px" />          
             <h3 className="p-2">Add your buddies and have a good time with them </h3>
        </div>
      </div>
     </div>
  )
}

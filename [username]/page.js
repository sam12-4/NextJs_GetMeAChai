"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

const UserName = () => {
    const [progress, setProgress] = useState(10)
    const ref = useRef(null)
    const { data: session } = useSession()
    const router = useRouter();
    console.log(session);
    useEffect(() => {
        if (!session) {
            router.push("/login");
            setProgress(100)
        }
        else{
            setProgress(100)
        }
    }, [session, router]);

    

    return (
        <>
        <LoadingBar
        color= '#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <div className="profile flex flex-col">
                <div className="coverImage">
                    <img src="./patreon_banner.gif" alt="" />
                </div>
                <div className='relative'>
                    <div className='flex justify-center items-center absolute -bottom-16 w-full'>
                        <img className='w-36 rounded-full relative' src="./cat.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="info mt-20 mb-10 text-white flex flex-col gap-2 justify-center items-center">
                {session && <><span className='text-xl font-bold'>Welcome {session.user.name}</span>
                    <span className='text-slate-400'>Creating Animated art for VTT's</span>
                    <span className='text-slate-400'>11,423 members. 84 posts.    $18,730/release</span>
                </>}
            </div>
            <div className="details text-white mb-10 flex gap-5 w-[80%] relative mx-auto" >

                <div className="supporters p-10 gap-5 w-1/2 bg-slate-900 rounded-lg">
                    <h2 className='text-2xl my-4 font-bold w-56'>Supporters</h2>
                    <ul className='mx-3'>
                        <li className='my-2 text-slate-400 flex gap-2'><img className="w-7" src="./user.gif" alt="" />Sameer donated <span className='font-bold'>$30</span> with a message ""</li>
                        <li className='my-2 text-slate-400 flex gap-2'><img className="w-7" src="./user.gif" alt="" />Sameer donated <span className='font-bold'>$30</span> with a message ""</li>
                        <li className='my-2 text-slate-400 flex gap-2'><img className="w-7" src="./user.gif" alt="" />Sameer donated <span className='font-bold'>$30</span> with a message ""</li>
                        <li className='my-2 text-slate-400 flex gap-2'><img className="w-7" src="./user.gif" alt="" />Sameer donated <span className='font-bold'>$30</span> with a message ""</li>
                        <li className='my-2 text-slate-400 flex gap-2'><img className="w-7" src="./user.gif" alt="" />Sameer donated <span className='font-bold'>$30</span> with a message ""</li>
                    </ul>

                </div>

                <div className="payment flex flex-col p-10 gap-5 w-1/2 bg-slate-900 rounded-lg">
                    <h2 className='text-2xl my-4 font-bold w-56'>Make a Payment</h2>
                    <input className='bg-slate-800 p-2 rounded-lg' placeholder='Enter Name' type="text" />
                    <input className='bg-slate-800 p-2 rounded-lg' placeholder='Enter Message' type="text" />
                    <input className='bg-slate-800 p-2 rounded-lg' placeholder='Enter Amount' type="text" />
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>Pay</button>
                    <div className="paymentButtons flex gap-3">
                        <button className='bg-slate-800 p-2 rounded-lg text-center'>Pay 10$</button>
                        <button className='bg-slate-800 p-2 rounded-lg text-center'>Pay 20$</button>
                        <button className='bg-slate-800 p-2 rounded-lg text-center'>Pay 30$</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserName

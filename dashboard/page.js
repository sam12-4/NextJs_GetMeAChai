"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const page = () => {
  const { data: session } = useSession()
    const router = useRouter();    
    console.log(session);
    useEffect(() => {
        if (!session) {
          router.push("/login");
        }
      }, [session, router]);
      
  const [form, setForm] = useState({name : "", email : "", username : "", profpic : "", coverpic : "", razorpaycred : ""})

  const handleChange = (e) => {
    setForm({...form , [e.target.name]: e.target.value})
    console.log(form);
  }
  
  return (
    <div className="payment flex flex-col p-10 gap-5 w-1/2 mx-auto my-10 bg-slate-900 rounded-lg">
                <h2 className='text-2xl text-white my-4 font-bold text-center'>Welcome to your Dashboard</h2>
                <form action="" className='text-white flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Name</label>
                    <input id="name" name='name' className='bg-slate-800 p-2 rounded-lg' value={form.name} placeholder='Enter Name' onChange={handleChange} type="text" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input id="email" name='email' className='bg-slate-800 p-2 rounded-lg' value={form.email} placeholder='Enter Name' onChange={handleChange} type="text" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="username">Username</label>
                    <input id="username" name='username' className='bg-slate-800 p-2 rounded-lg' value={form.username} placeholder='Enter Name' onChange={handleChange} type="text" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="profpic">Profile Picture</label>
                    <input id="profpic" name='profpic' className='bg-slate-800 p-2 rounded-lg' value={form.profpic} placeholder='Enter Name' onChange={handleChange} type="text" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="coverpic">Cover Picture</label>
                    <input id="coverpic" name='coverpic' className='bg-slate-800 p-2 rounded-lg' value={form.coverpic} placeholder='Enter Name' onChange={handleChange} type="text" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="razorpaycred">Razorpay Credentials</label>
                    <input id="razorpaycred" name='razorpaycred' className='bg-slate-800 p-2 rounded-lg' value={form.razorpaycred} placeholder='Enter Name' onChange={handleChange} type="text" />
                  </div>
                  <button className='flex text-base items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 cursor-pointer'>
                  <input type="submit" value='Save' />
                  </button>
                </form>
    </div>
  )
}

export default page

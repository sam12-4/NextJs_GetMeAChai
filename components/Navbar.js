"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { data: session } = useSession()
  
  console.log(session);
  return (
    <>
    <nav className="container my-2 flex items-center justify-center">
      <div className='navbar md:w-[90%] w-full rounded-lg p-4 bg-gradient-to-r from-slate-900 to-slate-700'>
        <div className="flex justify-between">
          <div className="logo flex gap-2 items-center text-xl font-bold "><Link rel="stylesheet" href="/" ><img className="w-9 cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full mx-2" src="./coffee.gif" alt="" /></Link><Link href={"/"}><span className='cursor-pointer text-gradient'>Get Me a Chai</span></Link></div>
          <div className='navButtons flex gap-2 relative'>
            {!session && <Link href="/login"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>}
            {session && <>

              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { setShowDropdown(!showDropdown) }} onBlur={() => setTimeout(() => {
                setShowDropdown(false)
              }, 100)} type="button">Welcome {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
              </button>
              <div id="dropdown" className={`z-9999 ${showDropdown ? "" : "hidden"} absolute top-12 overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`} >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                  </li>
                  <li>
                    <Link href="/earnings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                  </li>
                  <li>
                    <button onClick={() => {signOut(); setTimeout(() => {
                setShowDropdown(false) 
              }, 500)}} className="w-full text-start block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                  </li>
                </ul>
              </div>
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => {signOut()}}>Logout</button></>}
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar

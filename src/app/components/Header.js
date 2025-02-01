"use client"
import React, { startTransition } from 'react'
import Navbar from './Navbar'
import CoverHeader from './CoverHeader'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    const getParam = pathname.split('/')
  return (
   <div>
    {getParam.length > 2 ? 
    <Navbar subNav={false}/>
    :
    <div className="relative md:min-h-[100vh] h-[500px]">
    <Navbar subNav={true}/>
    <CoverHeader/>
  </div>
    
    }
   </div>
  )
}

export default Header

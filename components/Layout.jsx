import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import CookieConsent from 'react-cookie-consent'
import Link from "next/link"
import { useEffect,useState } from 'react'
import { getCategoriesAll } from '../services'



const Layout = ({children}) => {

const [search1,setSearch]=useState([]);
const [categories,setCategories]=useState([]);
useEffect(()=>{
  getCategoriesAll().then((result)=>{setCategories(result)})
},[])
  return (
    <>
    <Nav categories={categories=="undefined"? []:categories} />
    <main>{children}</main>
    <Footer/>
    <CookieConsent
    location='bottom'
    buttonText='Accept'
    style={{background: "#374151"}}
    buttonStyle={{background: "#6d28d9"}}
    >By using our pages you agree to our <Link href="/terms"><a className='underline hover:bg-purple-700'>Terms of Services</a></Link> and our <Link href="/privacy"><a className='underline hover:bg-purple-700'>Privacy Policy</a></Link></CookieConsent>  
    </>
  )
}

export default Layout
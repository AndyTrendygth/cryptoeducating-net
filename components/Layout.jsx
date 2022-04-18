import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { request } from 'graphql-request'
import useSWR from 'swr'
import CookieConsent from 'react-cookie-consent'
import Link from "next/link"

const fetcher = query => request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,query);

const Layout = ({children}) => {  
  const {data,error} = useSWR(`{
    categories {
    name
    slug
    id
    getStarted
    }
  }
`,fetcher)
 
  if(error) return <div>Failed to load</div>
  if (!data) {return <div>Loading...</div>}
  return (
    <>
    <Nav categories={data} />
    <main>{children}</main>
    <Footer/>
    <CookieConsent
    location='bottom'
    buttonText='Accept'
    style={{background: "#374151"}}
    buttonStyle={{background: "#6d28d9"}}
    >By using our pages you agree to our <Link><a className='underline hover:bg-purple-700' href="/terms">Terms of Services</a></Link> and our <Link><a className='underline hover:bg-purple-700' href="/privacy">Privacy Policy</a></Link></CookieConsent>
    </>
  )
}

export default Layout
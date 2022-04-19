import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import CookieConsent from 'react-cookie-consent'
import Link from "next/link"
import useSWR from 'swr'
import { request } from 'graphql-request'


const fetcher = query => request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query)

const Layout = ({children}) => {
  const { data, error } = useSWR(
    `
  query GetCategoires {
  categories {
    name
    slug
    id
    getStarted
  }
}
  `,
    fetcher
  )
const {data:search,error:searchError} = useSWR(`query MyQuery {
  categories {
    id
    name
    slug
  }
  posts {
    id
    slug
    title
  }
  promolinks {
    id
    name
    link
  }
}`,fetcher)
if (error) return <div>failed to load</div>
if(!search) return <div>loading.</div>
  return (
    <>
    <Nav categories={data? data.categories:[]} search={search}/>
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
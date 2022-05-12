import React from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"
import SearchComponent from './SearchComponent'
import { useState, useEffect } from 'react';
import { getCategoriesAll } from '../services'

const Nav = ({categories, search}) => {
    const [active, setActive] = useState(false);
    const handleClick = () => {setActive(!active);};
    
  return (
    <nav>
        <div className={`md:flex flex-row justify-between items-center hidden`}>
            <div className='flex flex-row'>
                <div className='mt-5 mb-3 mx-3' style={{width:'255px', height:'45px'}}>
                <Link href="/">
                    <a>
                     <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 253.97 47.66"><defs><linearGradient id="Unbenannter_Verlauf_49" y1="22.7" x2="253.97" y2="22.7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#923495"/><stop offset="0.5" stopColor="#592485"/><stop offset="1" stopColor="#701575"/></linearGradient></defs><path d="M8.75,13.74c4.67,0,7.85,2.8,8.57,7H11.47a3,3,0,0,0-2.82-1.85c-1.88,0-3,1.53-3,3.88s1.15,3.87,3,3.87a3,3,0,0,0,2.82-1.85h5.85c-.72,4.17-3.9,7-8.57,7C3.32,31.73,0,28,0,22.74S3.32,13.74,8.75,13.74Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M27.57,13.91c4.45,0,6.73,2.55,6.73,5.8a5.2,5.2,0,0,1-3.83,5.12l3.85,6.78h-6.1L24.9,25.26h0v6.35H19.32V13.91Zm-.5,4.65h-2.2v3h2.2c1.05,0,1.6-.45,1.6-1.5A1.42,1.42,0,0,0,27.07,18.56Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M34.82,13.91h6.35L44,20.19l2.82-6.28h6.25L46.72,26.23v5.38H41.17V26.23Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M62.07,26h-2.2v5.63H54.32V13.91h7.75c4.45,0,6.73,2.5,6.73,6.08C68.8,23.26,66.52,26,62.07,26Zm-.62-4.37c1.25,0,1.72-.65,1.72-1.62s-.47-1.63-1.72-1.63H59.87v3.25Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M69.55,13.91h14.9v4.4h-4.7v13.3H74.2V18.31H69.55Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M94.57,31.78a8.93,8.93,0,0,1-9.12-9.09,9.1,9.1,0,0,1,18.19,0A8.9,8.9,0,0,1,94.57,31.78Zm0-5.17C96.8,26.61,98,25,98,22.69s-1.22-4-3.45-4-3.47,1.55-3.47,4S92.3,26.61,94.57,26.61Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M117.45,18.34H111.2v2.17h5.5v4.17h-5.5v2.5h6.25v4.43h-11.8V13.91h11.8Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M136.12,22.71c0,5.05-3.55,8.9-9.2,8.9h-7.37V13.91h7.37C132.57,13.91,136.12,17.61,136.12,22.71Zm-9.7,3.95c2.45,0,4.08-1.38,4.08-3.95s-1.63-3.95-4.08-3.95H125.1v7.9Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M138,13.91h5.53v10c0,1.53.6,2.65,2.27,2.65s2.35-1.12,2.35-2.65v-10h5.52v10c0,5.23-3.57,7.9-8,7.9S138,29.11,138,23.88Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M164.35,13.74c4.67,0,7.84,2.8,8.57,7h-5.85a3,3,0,0,0-2.82-1.85c-1.88,0-3,1.53-3,3.88s1.15,3.87,3,3.87a3,3,0,0,0,2.82-1.85h5.85c-.73,4.17-3.9,7-8.57,7-5.43,0-8.75-3.72-8.75-9S158.92,13.74,164.35,13.74Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M186.27,28.93h-5.9l-.87,2.68h-5.83l6.48-17.7h6.4L193,31.61h-5.84Zm-3-9.09-1.6,4.92h3.2Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M193.25,13.91h14.9v4.4h-4.7v13.3H197.9V18.31h-4.65Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M209.65,13.91h5.55v17.7h-5.55Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M234.67,13.91v17.7h-5.55l-5.87-8.9v8.9H217.7V13.91h5.55L229.12,23v-9Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M253.87,20H248a2.63,2.63,0,0,0-2.37-1.1c-2.15,0-3.35,1.53-3.35,3.88,0,2.74,1.25,4.12,4,4.12a3.62,3.62,0,0,0,3.1-1.55H245V21.39h9v5.54a9.22,9.22,0,0,1-8.3,4.8c-5.57,0-9-3.72-9-9s3.4-9,9-9C250.32,13.74,253.34,16.19,253.87,20Z" fill="url(#Unbenannter_Verlauf_49)"/><text/><text transform="translate(103.75 42.23)" fontSize="12" fill='#fff' fontFamily="Poppins-Thin, Poppins" fontWeight="200">made simple</text></svg>
                    </a>
                </Link>
                </div>
            
                <div className={`${styles.nav} md:hidden`}>
                   <button className='ml-3 mt-8 mb-2' >Categories</button>
                   <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                   <div className={`${styles.navitem} bg-gray-700 rounded-lg pt-4 px-1 pb-2 absolute`}>
                    <div className='grid grid-cols-2'>
                        {categories.map((category)=>{
                            if(category.getStarted==false){
                            return <div key={category.id}>
                                <Link href={`/category/${category.slug}`}>
                                <a className='hover:text-purple-700 m-1'>{category.name}</a>
                                </Link>
                            </div>
                        }})
                        }
                   </div>
                   </div>
                </div>
                <div className={`my-8 pl-3 ${styles.nav}`}>
                    <button className='mb-2'>Get Started</button>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    <div className={` ${styles.navitem} absolute bg-gray-700 rounded-lg pt-4 px-1 pb-2 `}>
                    {categories.map((category)=>{
                        if(category.getStarted==true){
                            return <div key={category.id}>
                                <Link href={`/category/${category.slug}`}>
                                <a className='hover:text-purple-700 m-1'>{category.name}</a>
                                </Link>
                            </div>
                        }})
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div>
                <Link href="/promocodes"><a className='hover:bg-purple-700 p-3 rounded-lg'>Promo Codes</a></Link>
                </div>
                <div className='mx-4'>
                    <SearchComponent/>
                </div>
            </div>
        </div>
        <div className="md:hidden flex justify-between mt-2 mr-2">
            <div className='flex ml-20 mt-3'>
            <Image src="/Nav_Logo_v1.png" height={45} width={255} alt="Logo of Cryptoeducating.net"/>  
            </div>
            
            <div className='flex flex-row justify-end'>
                <button className="" onClick={handleClick}>
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
         </div>
        <div className={`${active ? "":"hidden"} flex flex-col`}>
            <div className='flex flex-row justify-center'>
            <div className={`${styles.nav} md:hidden mx-2`}>
                   <button className='mt-8 mb-2' >Categories</button>
                   <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                   <div className={`${styles.navitem} bg-gray-700 rounded-lg pt-4 px-1 pb-2 absolute`}>
                    <div className='grid grid-cols-2'>
                        {categories.map((category)=>{
                            if(category.getStarted==false){
                            return <div key={category.id}>
                                <Link href={`/category/${category.slug}`}>
                                <a className='hover:text-purple-700 m-1'>{category.name}</a>
                                </Link>
                            </div>
                        }})
                        }
                   </div>
                   </div>
                </div>
                <div className={`mt-8 mb-4 pl-3 ${styles.nav} mx-2`}>
                    <button className='mb-2'>Get Started</button>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    <div className={` ${styles.navitem} absolute bg-gray-700 rounded-lg pt-4 px-1 pb-2 `}>
                    {categories.map((category)=>{
                        if(category.getStarted==true){
                            return <div key={category.id}>
                                <Link href={`/category/${category.slug}`}>
                                <a className='hover:text-purple-700 m-1'>{category.name}</a>
                                </Link>
                            </div>
                        }})
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <div>
                <Link href="/promocodes"><a className='hover:bg-purple-700 p-3 rounded-lg'>Promo Codes</a></Link>
                </div>
            </div>
            <div className='flex flex-row m-4 justify-center'>
                    <SearchComponent/>
            </div>
        </div>
    </nav>
  )
}

export default Nav


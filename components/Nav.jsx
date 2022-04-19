import React from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"
import SearchComponent from './SearchComponent'
import { useState, useEffect } from 'react';


const Nav = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {setActive(!active);};
    const categories=[
        {
          "id": "cl0v69lyp9mx00axor4ne8pd5",
          "name": "Blockchain",
          "slug": "blockchain",
          "getStarted": true
        },
        {
          "id": "cl196jy95gmyp0ftjmms1dby1",
          "name": "DeFi",
          "slug": "defi",
          "getStarted": false
        },
        {
          "id": "cl196kliihhk80auoti3ca5k0",
          "name": "CeFi",
          "slug": "cefi",
          "getStarted": false
        },
        {
          "id": "cl196l0kuiemm0duocnodbw0b",
          "name": "Exchanges",
          "slug": "exchanges",
          "getStarted": false
        },
        {
          "id": "cl196lbukhhpn0auolkp9hjwx",
          "name": "Wallets",
          "slug": "wallets",
          "getStarted": false
        },
        {
          "id": "cl196lnz9hhrl0auo32xlwm85",
          "name": "NFT",
          "slug": "nft",
          "getStarted": false
        },
        {
          "id": "cl196n7pbh32x0cuj79benzbe",
          "name": "Bitcoin",
          "slug": "bitcoin",
          "getStarted": false
        },
        {
          "id": "cl196ntr3gnq30ftj3pw6c6p1",
          "name": "Altcoins",
          "slug": "altcoins",
          "getStarted": false
        },
        {
          "id": "cl196ohpdhif20auovsdu39wo",
          "name": "Metaverse",
          "slug": "metaverse",
          "getStarted": false
        },
        {
          "id": "cl196ubylh4be0cujxpb4hnbv",
          "name": "Guides",
          "slug": "guides",
          "getStarted": true
        },
        {
          "id": "cl196v0ophjew0auo7dd5ikqs",
          "name": "Crypto Basics",
          "slug": "crypto-basics",
          "getStarted": true
        },
        {
          "id": "cl196yn1kihrg0duoos1yfxjm",
          "name": "TA",
          "slug": "technical-analysis",
          "getStarted": false
        },
        {
          "id": "cl1970nyohawl0bt3dl8u126w",
          "name": "Deep Dives",
          "slug": "deep-dives",
          "getStarted": false
        },
        {
          "id": "cl24es0zr9rce0brx9l2uft7m",
          "name": "Tools",
          "slug": "tools",
          "getStarted": true
        }
      ];
    

    
  return (
    <nav>
        <div className={`md:flex flex-row justify-between items-center hidden`}>
            <div className='flex flex-row'>
            <Link href="/"><a><Image src="/Logo_v14-min.png" alt="Cryptoeducating Logo" className='cursor-pointer' width={265} height={75}/></a></Link>
                <div className={`${styles.nav} md:hidden`}>
                   <button className='mt-8 mb-2' >Categories</button>
                   <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                   <div className={`${styles.navitem} bg-gray-700 rounded-lg pt-4 px-1 pb-2 absolute`}>
                    <div className='grid grid-cols-2'>
                        { categories.map((category)=>{
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
                    
                </div>
            </div>
        </div>
        <div className="md:hidden flex justify-between mt-2 mr-2">
        <Link href="/"><a><Image src="/Logo_v14-min.png" alt="Cryptoeducating Logo" className='cursor-pointer' width={265} height={75}/></a></Link>
        <button className="" onClick={handleClick}>
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button> </div>
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
                   
            </div>
        </div>
    </nav>
  )
}

export default Nav


import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

const Categories = () => {
  return (
      <div className='flex flex-col items-center mt-5'>
    <h1 className={` ${styles.h1} text-4xl font-black p-2`}>OUR CATEGORIES</h1>
    <div className='grid-cols-3 m-3'>
        <div>
        <Link href="/category/defi"><a className='text-3xl font-bold m-3 hover:text-purple-700'>DeFi</a></Link>
        <Link href="/category/exchanges"><a className='text-3xl font-bold m-3 hover:text-purple-700'>Exchanges</a></Link>
        <Link href="/category/blockchain"><a className='text-3xl font-bold m-3 hover:text-purple-700'>Blockchain</a></Link>
        </div>
        <Link href="/category/nft"><a className='text-3xl font-bold m-3 hover:text-purple-700'>NFT</a></Link>
        <Link href="/category/wallets"><a className='text-3xl font-bold m-3 hover:text-purple-700'>Wallets</a></Link>
        <Link href="/category/bitcoin"><a className='text-3xl font-bold m-3 hover:text-purple-700'>Bitcoin</a></Link>
        <div>
        <Link href="/category/technical-analysis"><a className='text-3xl font-bold m-3 hover:text-purple-700'>TA</a></Link>
        <Link href="/category/metaverse"><a className='text-3xl font-bold m-3 hover:text-purple-700'>Metaverse</a></Link>
        <Link href="/category/altcoins"><a className='text-3xl font-bold m-3 hover:text-purple-700'>Altcoins</a></Link>
        </div>
        <Link href="/category/deep-dives"><a className='text-3xl font-bold m-3 hover:text-purple-700'>Deep Dives</a></Link>
        <Link href="/category/guides"><a className='text-3xl font-bold m-3 hover:text-purple-700'>Guides</a></Link>
        <Link href="/category/crypto-basics"><a className='text-3xl font-bold m-3 hover:text-purple-700'>Crypto Basics</a></Link>
    </div>
    </div>
  )
}

export default Categories
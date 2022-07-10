import Link from 'next/link'
import React from 'react'
import styles from './Categories.module.scss'

const Categories = () => {
return (
  <div className='flex flex-col items-center mt-5'>
    <h1 className={` ${styles.h1} text-4xl font-black p-2`}>OUR CATEGORIES</h1>
    <div className='flex flex-col gap-14 md:flex md:flex-row'>    
      <div className={`${styles.circle} `}>
        <div className={`${styles.text}`}>
          <p className='text-center font-bold text-xl mr-16 md:mr-14 sm:text-2xl md:text-4xl'>BLOCKCHAIN</p>
          <div className='text-md font-normal mt-1 mr-3 sm:text-xl md:text-xl lg:text-2xl'>FROM LAYER-1 TO PROTOCOL</div>
          <p className='text-center font-bold text-xl sm:text-2xl md:text-4xl'>WALLETS</p>
          <div className='text-lg font-normal mt-1 mr-3 md:text-xl lg:text-2xl'>BROWSER TO HARDWARE</div>
        </div>
      </div>
      
      <div className='flex flex-col'>
        <div className={`${styles.ellips_1}`}> 
          <div className='mt-8 flex flex-col'>
            <p className='text-xl font-bold sm:text-2xl md:text-4xl'>BITCOIN</p>
            <div className='text-md font-normal mt-1 mr-3 md:text-xl lg:text-2xl'>EVERYTHING ABOUT OUR FAVORITE COIN</div>
          </div>
          <div className='mt-2'>
          <p className='text-lg font-bold sm:text-2xl md:text-4xl'>NFT</p>
            <div className='text-md font-normal sm:text-xl md:text-xl lg:text-2xl'>MORE THAN RANDOM JPEGS</div>
          </div>
        </div>
      <div className={`${styles.ellips_2}`}>
        <div className={`mt-6`}>
      <p className=' font-bold text-xl sm:text-2xl md:text-4xl'>DEFI</p>
          <div className='text-center text-md font-normal mt-1 sm:text-xl md:text-xl lg:text-2xl'>STAKING AND MORE</div>
          <p className=' font-bold text-xl mt-6 sm:text-md md:text-4xl'>ALTCOINS</p>
          <div className='text-md font-normal mt-1 sm:text-xl md:text-xl lg:text-2xl'>FOR THE DEGENS</div>
          </div>
      </div>
   </div>
  </div>
  <div className='font-bold text-xl mt-10 sm:text-2xl md:text-3xl lg:text-4xl'>AND MORE!</div>
    </div>
  )
}

export default Categories
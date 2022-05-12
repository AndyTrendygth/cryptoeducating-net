import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


//4 Spalten Layout links Logo + copyright darunter; Discover Spalte, Company spalte, Products
const Footer = () => {
  return (
    <footer className='m-5 pt-5 '>
        <div className='flex md:flex-row align-top justify-between flex-col'>
            <div className='flex flex-col justify-start'>
                <Link href="/"><a>
                     <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 253.97 47.66"><defs><linearGradient id="Unbenannter_Verlauf_49" y1="22.7" x2="253.97" y2="22.7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#923495"/><stop offset="0.5" stopColor="#592485"/><stop offset="1" stopColor="#701575"/></linearGradient></defs><path d="M8.75,13.74c4.67,0,7.85,2.8,8.57,7H11.47a3,3,0,0,0-2.82-1.85c-1.88,0-3,1.53-3,3.88s1.15,3.87,3,3.87a3,3,0,0,0,2.82-1.85h5.85c-.72,4.17-3.9,7-8.57,7C3.32,31.73,0,28,0,22.74S3.32,13.74,8.75,13.74Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M27.57,13.91c4.45,0,6.73,2.55,6.73,5.8a5.2,5.2,0,0,1-3.83,5.12l3.85,6.78h-6.1L24.9,25.26h0v6.35H19.32V13.91Zm-.5,4.65h-2.2v3h2.2c1.05,0,1.6-.45,1.6-1.5A1.42,1.42,0,0,0,27.07,18.56Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M34.82,13.91h6.35L44,20.19l2.82-6.28h6.25L46.72,26.23v5.38H41.17V26.23Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M62.07,26h-2.2v5.63H54.32V13.91h7.75c4.45,0,6.73,2.5,6.73,6.08C68.8,23.26,66.52,26,62.07,26Zm-.62-4.37c1.25,0,1.72-.65,1.72-1.62s-.47-1.63-1.72-1.63H59.87v3.25Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M69.55,13.91h14.9v4.4h-4.7v13.3H74.2V18.31H69.55Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M94.57,31.78a8.93,8.93,0,0,1-9.12-9.09,9.1,9.1,0,0,1,18.19,0A8.9,8.9,0,0,1,94.57,31.78Zm0-5.17C96.8,26.61,98,25,98,22.69s-1.22-4-3.45-4-3.47,1.55-3.47,4S92.3,26.61,94.57,26.61Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M117.45,18.34H111.2v2.17h5.5v4.17h-5.5v2.5h6.25v4.43h-11.8V13.91h11.8Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M136.12,22.71c0,5.05-3.55,8.9-9.2,8.9h-7.37V13.91h7.37C132.57,13.91,136.12,17.61,136.12,22.71Zm-9.7,3.95c2.45,0,4.08-1.38,4.08-3.95s-1.63-3.95-4.08-3.95H125.1v7.9Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M138,13.91h5.53v10c0,1.53.6,2.65,2.27,2.65s2.35-1.12,2.35-2.65v-10h5.52v10c0,5.23-3.57,7.9-8,7.9S138,29.11,138,23.88Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M164.35,13.74c4.67,0,7.84,2.8,8.57,7h-5.85a3,3,0,0,0-2.82-1.85c-1.88,0-3,1.53-3,3.88s1.15,3.87,3,3.87a3,3,0,0,0,2.82-1.85h5.85c-.73,4.17-3.9,7-8.57,7-5.43,0-8.75-3.72-8.75-9S158.92,13.74,164.35,13.74Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M186.27,28.93h-5.9l-.87,2.68h-5.83l6.48-17.7h6.4L193,31.61h-5.84Zm-3-9.09-1.6,4.92h3.2Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M193.25,13.91h14.9v4.4h-4.7v13.3H197.9V18.31h-4.65Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M209.65,13.91h5.55v17.7h-5.55Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M234.67,13.91v17.7h-5.55l-5.87-8.9v8.9H217.7V13.91h5.55L229.12,23v-9Z" fill="url(#Unbenannter_Verlauf_49)"/><path d="M253.87,20H248a2.63,2.63,0,0,0-2.37-1.1c-2.15,0-3.35,1.53-3.35,3.88,0,2.74,1.25,4.12,4,4.12a3.62,3.62,0,0,0,3.1-1.55H245V21.39h9v5.54a9.22,9.22,0,0,1-8.3,4.8c-5.57,0-9-3.72-9-9s3.4-9,9-9C250.32,13.74,253.34,16.19,253.87,20Z" fill="url(#Unbenannter_Verlauf_49)"/><text/><text transform="translate(103.75 42.23)" fontSize="12" fill='#fff' fontFamily="Poppins-Thin, Poppins" fontWeight="200">made simple</text></svg>
                    </a></Link>
                <p>&copy; {new Date().getFullYear()} Cryptoeducating</p>
                <Link href="https://www.etherscan.io"><a>Donate &#128151;</a></Link>
            </div>
            <div className='flex flex-col mb-3'>
                <h3 className='font-semibold'>Discover</h3>
                <br />
                <Link href="/category/crypto-basics"><a className='cursor-pointer'>Beginner Posts</a></Link>
                <Link href="/category/tools"><a className='cursor-pointer'>Tools</a></Link>
                <Link href="/promocodes"><a className='cursor-pointer'>Promo Codes</a></Link>
            </div>
            <div className='flex flex-col mb-3'>
                <h3 className='font-semibold'>Team</h3>
                <br />
                <Link href="/about"><a>About us</a></Link>
                <a href='https://forms.gle/5Kt2GV2Sa5dzuaxLA'>Request Topics</a>
                <a href='mailto:business@cryptoeducating.net'> Advertise</a>
                <Link href="/terms"><a>Terms of Services</a></Link>
                <Link href="/privacy"><a>Privacy</a></Link>
            </div>
            <div className='flex md:flex-col flex-row'>
                <a href="https://www.twitter.com/cryptoedxcating" aria-label='Twitter'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
                </a>
                <a href='https://www.youtube.com/channel/UC7zCAlm7nmh2jyHiDcjZbxQ' aria-label='Youtube'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                </svg>
                </a>
                <a href="https://www.instagram.com/cryptoeducating" aria-label='Instagram'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                </a>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer
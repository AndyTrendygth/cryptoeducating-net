import React from 'react'
import { useState } from 'react'
import useSWR from 'swr'
import request from 'graphql-request'
import Link from 'next/link'

const fetcher = query => request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,query)

const SearchComponent = () => {
 
    const [search,setSearch]=useState("");
    const [act,setAct]=useState(false);

    const handle = ()=>{
        setAct(!act);
    }

    const {data,error} = useSWR(
        `
  query MyQuery {
  posts {
    slug
    title
    id
  }
}
  `,fetcher
    )
  return (
    <div>
        <input className={`search-input py-2 px-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 outline-none`}
        type="text" 
        placeholder="Search something..."
        onChange={(event)=>{
            setSearch(event.target.value)
            setAct(false)
        }}
        />
       <div className={`${act ? "hidden":""} flex flex-col absolute bg-gray-900 p-2 rounded-lg focus:block`}>
           {!data? []: data.posts.filter((val)=>{
               if(search==""){
                   
               }
               else if(val.title.toLowerCase().includes(search.toLowerCase())){
                   return val
               }
           }).map((post)=>{
           return <Link href={`/post/${post.slug}`} key={post.id}><a onClick={handle}><div className='hover:bg-gray-700 rounded-lg p-1'>{post.title}</div></a></Link>
       })}

       </div>
       
    </div>
  )
}

export default SearchComponent

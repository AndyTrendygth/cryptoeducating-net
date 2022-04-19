import React from 'react'
import { useState } from 'react/cjs/react.development'

import Link from 'next/link'


const SearchComponent = ({searcher}) => {
 
    const [search,setSearch]=useState("");
    const [act,setAct]=useState(false);

    const handle = ()=>{
        setAct(!act);
    }

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
           { searcher.posts.filter((val)=>{
               if(search==""){
                   
               }
               else if(val.title.toLowerCase().includes(search.toLowerCase())){
                   return val
               }
           }).map((post)=>{
           return <Link href={`/post/${post.slug}`} key={post.id}><a onClick={handle}><div className='hover:bg-gray-700 rounded-lg p-1'>{post.title}</div></a></Link>
       })}
       {searcher.categories.filter((val)=>{
               if(search==""){
                   
               }
               else if(val.name.toLowerCase().includes(search.toLowerCase())){
                   return val
               }
           }).map((category)=>{
           return <Link href={`/category/${category.slug}`} key={category.id}><a onClick={handle}><div className='hover:bg-gray-700 rounded-lg p-1'>{category.name}</div></a></Link>
       })}
       {searcher.promolinks.filter((val)=>{
               if(search==""){
                   
               }
               else if(val.name.toLowerCase().includes(search.toLowerCase())){
                   return val
               }
           }).map((promo)=>{
           return <Link href={`${promo.link}`} key={promo.id}><a onClick={handle}><div className='hover:bg-gray-700 rounded-lg p-1'>{promo.name}</div></a></Link>
       })}

       </div>
       
    </div>
  )
}

export default SearchComponent

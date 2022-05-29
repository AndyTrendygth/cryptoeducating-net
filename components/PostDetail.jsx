import React from 'react'
import Link from "next/link"
import FeaturedPosts from './FeaturedPosts';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from "next/image"
import moment from 'moment'


const PostDetail = ({post}) => {

    const getHeading = (index, text, type) => {
        let modifiedText = text;
        
        switch (type) {
        case 'heading-two':
        return <Link passHref href={`/post/${post.slug}/#${text}`}><h2 key={index} className="text-xl font-medium hover:text-purple-700 cursor-pointer my-1 mx-2 ">{modifiedText.map((item, i) => <React.Fragment key={i}>{text}</React.Fragment>)}</h2></Link>;
        case 'heading-three':
        return <Link passHref href={`/post/${post.slug}/#${text}`}><h3 key={index} className="text-xl font-light ml-8 hover:text-purple-700 cursor-pointer">{modifiedText.map((item, i) => <React.Fragment key={i}>{text}</React.Fragment>)}</h3></Link>;
        case 'heading-four':
        return <Link passHref href={`/post/${post.slug}/#${text}`}> <h4 key={index} className="text-xl font-light ml-8 hover:text-purple-700 cursor-pointer">{modifiedText.map((item, i) => <React.Fragment key={i}>{text}</React.Fragment>)}</h4></Link>;
        case 'paragraph':
        return <p></p>;
        default:
        return modifiedText;
        } 
    };
                                                   
    return (
  <div>
    <div className='flex flex-col pt-3 mb-4'>
    <div className='md:basis-1/4 hidden'></div>
        <div className='flex flex-col text-center md:basis-1/2 basis-6/8'>
            <div className='flex flex-row ml-3' key={post.id}>
                {post.categories.map((category)=>(
                    <Link href={`/category/${category.slug}`} key={category.id}>
                    <a className='p-1 font-light bg-gray-700 rounded-lg text-left mr-2'>{category.name}</a>
                    </Link>
                ))}
            </div>
            <div>
            {moment(post.updatedAt).format('MM DD YYYY')}
            </div>
            <div className='text-4xl text-center my-4 '>
                <h1>{post.title}</h1>    
            </div>
            <div className='p-5'>
                <Image src={post.featuredImage.url} alt={post.title} className="rounded-xl" width={960} height={540}/>
            </div>
            
                <div className='flex flex-col bg-gray-700 text-center rounded-lg mx-12 my-4 p-3 md:hidden'>
                  <h2 className='text-2xl text-center px-20 pb-3'>Content Table</h2>
                  <div className='text-left' key={post.id}>
                  {post.content.raw.children.map((typeObj,index)=>{
                const children = typeObj.children.map((item, itemIndex)=>getHeading(itemIndex, item.text, item))
                return getHeading(index, children, typeObj.type)
                })}
                </div>
                </div>
            <div className='flex flex-row md:mx-12 mx-4'>
            <div className='text-left mx-8 mt-4 w-3/4'>
            <RichText
        content={post.content.raw}
        renderers={{
          h1: ({ children }) => <h1 className="text-white">{children}</h1>,
          h2:({children})=><h2 className='text-3xl my-4'>{children}</h2>,
          h3:({children})=><h2 className='text-2xl my-2'>{children}</h2>,
          h4: ({ children }) => <h4>{children}</h4>,
          h5: ({ children }) => <h5>{children}</h5>,
          h6: ({ children }) => <h6>{children}</h6>,
          bold: ({ children }) => <strong>{children}</strong>,
          italic: ({ children }) => <i>{children}</i>,
          underline: ({ children }) => <u>{children}</u>,
          code: ({ children }) => <code>{children}</code>,
          code_block: ({ children }) => (
          <pre
          style={{
          whiteSpace: 'pre',
          wordWrap: 'break-word',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          fontFamily: 'monospace',
          }}
          >
          {children}
          </pre>),
          p: ({children})=><p className='text-base break-words pb-3'>{children}</p>,
          a: ({ children, openInNewTab, href, rel, ...rest }) => {
            if (href.match(/^https?:\/\/|^\/\//i)) {
              return (
                <Link href={href} className="bg-purple-700">
                <a
                  href={href}
                  target={openInNewTab ? '_blank' : '_self'}
                  rel={ 'noreferrer noopener'}
                  {...rest}
                  className="text-purple-700 underline"
                >
                  {children}
                </a></Link>); 
            }
          },
          img:({ src, title, width, height, altText})=><Image 
          src={src}
          title={title}
          width={width}
          height={height}
          alt={altText}
          />,
          iframe:({children, url, width, height})=><iframe
          url={url}
          width={width}
          height={height}
          >{children}</iframe>,
          ul:({children})=><ul>{children}</ul>,
          ol:({children})=><ol type='1'>{children}</ol>,
          li:({children})=><li className='mb-2 list-disc'>{children}</li>,
          table:({children})=><table className='border-collapse mb-2'>{children}</table>,
          table_head:({children})=><thead className='border-2'>{children}</thead>,
          table_body:({children})=><tbody className='border-2'>{children}</tbody>,
          table_cell:({children})=><td className='border-2 m-2'>{children}</td>,
          table_row:({children})=><tr className='border-2 p-2'>{children}</tr>,
          table_header_cell:({children})=><th className='border-2'>{children}</th>
        }}/>
            </div>
            <div className='md:flex flex-col text-center hidden w-1/4'>
                  <h2 className='text-2xl text-center pt-4'>Content Table</h2>
                  <div className='text-left bg-gray-700 rounded-lg' key={post.id}>
                  {post.content.raw.children.map((typeObj,index)=>{
                const children = typeObj.children.map((item, itemIndex)=>getHeading(itemIndex, item.text, item))
                return getHeading(index, children, typeObj.type)
                })}
                </div>
                </div>
            </div>
        
        </div>
        <div className='md:flex md:basis-1/4 hidden' >
        
        </div>
    </div>
    <div className='my-4'>
        <h2 className='text-3xl text-center mt-4 my-4'>Related Posts</h2>
        <FeaturedPosts slug={post.slug} categories={post.categories}/>
    </div>
        
    </div>
    
  )
}

export default PostDetail
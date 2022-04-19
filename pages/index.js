import Head from 'next/head'
import Header from '../components/Header.jsx'
import BeginnerPosts from '../components/BeginnerPosts.jsx'
import Tools from '../components/Tools.jsx'
import { getPosts_beginner } from '../services/index.js'



export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Cryptoeducating.net</title>
        <meta name="Cryptoeducating" content="The place to learn everything in crypto" />
        <meta name='description' content='The Landing Page of cryptoeducating'/>
      </Head>
      <Header/>
      <BeginnerPosts posts={posts}/>
      <Tools/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export async function getStaticProps(){
  const posts = await getPosts_beginner();
  return{
      props:{posts},
  };
}

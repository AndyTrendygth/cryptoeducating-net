import Head from 'next/head'
import Header from '../components/Header.jsx'
import BeginnerPosts from '../components/BeginnerPosts.jsx'
import Tools from '../components/Tools.jsx'
import { getPosts_beginner } from '../services/index.js'
import Categories from '../components/Categories.jsx'



export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Cryptoeducating | Crypto made simple for you</title>
        <meta name="Cryptoeducating" content="The place to learn everything in crypto" />
        <meta name='description' content='Cryptoeducating is the place to learn everything in crypto in very simple ways. It is a free platform designed for beginners to get an easy start in crypto.'/>
      </Head>
      <Header/>
      <BeginnerPosts posts={posts}/>
      <Tools/>
      <Categories/>
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

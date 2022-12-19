import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Head from 'next/head'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchedPosts } from '../store'
import { posts } from '../posts'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSearchedPosts(posts))
  }, [])
  return (
    <div className='container w-11/12 mx-auto'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='This website is a portfolio blog project built with NextJS.'
        />
        <meta name='og:title' content="Developer's Blog Portfolio" />
        <title>devlog</title>
      </Head>
      <Navbar home />
      <Main />
      <Footer />
    </div>
  )
}

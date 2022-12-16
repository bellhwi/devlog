import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Filter from '../components/Filter'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='container w-11/12 mx-auto'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='This website is a portfolio blog project built with NextJS.'
        />
        <meta name='og:title' content="Developer's Blog Portfolio" />
      </Head>
      <Navbar home />
      <Filter />
      <Main />
    </div>
  )
}

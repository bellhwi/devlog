import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Head from 'next/head'
import Footer from '../components/Footer'
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
      <Main />
      <Footer />
    </div>
  )
}

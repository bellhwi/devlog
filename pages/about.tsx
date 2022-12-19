import Head from 'next/head'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <div className='container w-11/12 mx-auto'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='This website is a portfolio blog project built with NextJS.'
        />
        <meta name='og:title' content="Developer's Blog Portfolio" />
        <title>About - devlog</title>
      </Head>
      <h1 className='text-5xl sm:text-6xl text-center mt-24 font-bold mb-8'>
        Welcome To{' '}
        <Link className='underline' href='/'>
          Devlog
        </Link>
      </h1>
      <p>
        Devlog is an imitation website of{' '}
        <a
          className='underline'
          href='https://velog.io/'
          target='_blank'
          rel='noreferrer'
        >
          velog
        </a>
        , the developer&apos;s blog. This is part of{' '}
        <a
          className='underline'
          href='http://jonghwikim.com/'
          target='_blank'
          rel='noreferrer'
        >
          Jonghwi Kim's portfolio website
        </a>{' '}
        projects. It is built with NextJS and Typescript. You can see the source
        code of this project on my{' '}
        <a
          className='underline'
          href='https://github.com/bellhwi/devlog'
          target='_blank'
          rel='noreferrer'
        >
          GitHub repository
        </a>
        .
      </p>
      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

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
      <div className='mx-auto'>
        <h1 className='text-5xl sm:text-6xl text-center mt-16 font-bold mb-8'>
          Welcome To{' '}
          <Link className='underline' href='/'>
            Devlog
          </Link>
        </h1>
        <div className='max-w-md mx-auto w-11/12'>
          <Image
            src='/images/github-cover.png'
            alt='aboutImage'
            width='400'
            height='400'
            style={{ objectFit: 'cover' }}
            className='mx-auto my-12'
          />
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
              Jonghwi Kim&apos;s portfolio website
            </a>{' '}
            projects. It is built with NextJS and Typescript. You can see the
            source code of this project on my{' '}
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
        </div>
      </div>
      <Footer />
    </div>
  )
}

import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { posts } from '../../posts'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const id: any = router.query['id']

  return (
    <div className='container w-11/12 mx-auto'>
      <Head>
        <title>{posts[id].title}</title>
      </Head>
      <Navbar header={posts[id].header} />
      <div className='mt-12'>
        <h1 className='text-3xl font-bold'>{posts[id].title}</h1>
        <div className='flex items-center my-8'>
          <p className='text-sm font-bold'>{posts[id].author}</p>
          <p className='text-sm ml-4'>{posts[id].date}</p>
          <div className='grow'></div>
          <div className='badge badge-outline badge-sm p-3'>
            ❤️ {posts[id].likes}
          </div>
        </div>
        <div className='relative w-full h-96'>
          <Image
            src={posts[id].src}
            alt='image'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='mt-10'>
          <div>{posts[id].contents}</div>
          <div className='relative w-20 h-20 mt-10 mb-4'>
            <Image
              src={posts[id].profileImg}
              alt='profileImage'
              fill
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <p className='font-bold'>{posts[id].author}</p>
          <p className='my-2'>{posts[id].profileDesc}</p>
          <hr className='my-4 border-gray-600' />
          <div className='flex items-center mb-8'>
            <a
              className='mr-3 text-xl'
              href='https://github.com/bellhwi'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/jonghwikim/'
              target='_blank'
              rel='noreferrer'
              className='mr-3 text-xl'
            >
              <FaLinkedinIn />
            </a>
            <a
              href='https://www.youtube.com/channel/UCMDLPQ99Hp5o-ri25xYd0mA'
              target='_blank'
              rel='noreferrer'
              className='text-xl'
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post

import Image from 'next/image'
import Navbar from '../components/Navbar'
import { posts } from '../posts'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const post = () => {
  const example = posts[0]

  return (
    <div className='container w-11/12 mx-auto'>
      <Navbar header={example.header} />
      <div className='mt-12'>
        <h1 className='text-3xl font-bold'>{example.title}</h1>
        <div className='flex items-center my-8'>
          <p className='text-sm font-bold'>{example.author}</p>
          <p className='text-sm ml-4'>{example.date}</p>
          <div className='grow'></div>
          <div className='badge badge-outline badge-sm p-3'>
            ❤️ {example.likes}
          </div>
        </div>
        <div className='relative w-full h-96'>
          <Image
            src={example.src}
            alt='image'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='mt-10'>
          <div>{example.contents}</div>
          <div className='relative w-20 h-20 mt-10 mb-4'>
            <Image
              src={example.profileImg}
              alt='profileImage'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className='font-bold'>{example.author}</p>
          <p className='my-2'>{example.profileDesc}</p>
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

export default post

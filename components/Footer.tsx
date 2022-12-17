import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='lg:fixed lg:bottom-0 lg:mb-12'>
      <div className='flex justify-center lg:justify-start items-center text-gray-400 pb-10 lg:pb-0 pt-8 lg:pt-0'>
        <a
          className='hover:text-gray-600 text-lg'
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
          className='mx-4 hover:text-gray-600 text-lg'
        >
          <FaLinkedinIn />
        </a>
        <a
          href='https://www.youtube.com/channel/UCMDLPQ99Hp5o-ri25xYd0mA'
          target='_blank'
          rel='noreferrer'
          className='hover:text-gray-600 text-lg'
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  )
}

export default Footer

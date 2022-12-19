import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='w-full mx-auto my-10'>
      <div className='flex justify-center items-center text-gray-400'>
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

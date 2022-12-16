import { MdDarkMode, MdSearch } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/favicon-32x32.png'

type Props = {
  home?: Boolean
  header?: String
}

const Navbar = ({ home, header }: Props) => {
  return (
    <div className='flex items-center mt-4'>
      {home ? (
        <Link href='/' className='text-xl text-logo font-bold'>
          devlog
        </Link>
      ) : (
        <div className='flex items-center'>
          <Link href='/' className='text-xl text-logo font-bold'>
            <Image src={logo} alt='logo' />
          </Link>
          <a href='#' className='ml-2 font-bold'>
            {header}
          </a>
        </div>
      )}
      <div className='grow'></div>
      <div className='flex items-center'>
        <MdDarkMode className='text-2xl' />
        <MdSearch className='text-2xl mx-4' />
        <button className='btn btn-outline btn-sm '>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar

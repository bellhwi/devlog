import { MdDarkMode, MdSearch, MdOutlineWbSunny } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/favicon-32x32.png'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

type Props = {
  home?: Boolean
  header?: String
  darkMode?: Boolean
  setDarkMode?: any
}

const Navbar = ({ home, header }: Props) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <div className='flex items-center mt-4'>
      {home ? (
        <p className='text-xl text-logo font-bold'>devlog</p>
      ) : (
        <div className='flex items-center'>
          <Link href='/' className='text-xl text-logo font-bold'>
            <Image src={logo} alt='logo' />
          </Link>
          <p className='ml-2 font-bold'>{header}</p>
        </div>
      )}
      <div className='grow'></div>
      <div className='flex items-center'>
        <button
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }}
        >
          {resolvedTheme === 'dark' ? (
            <MdOutlineWbSunny className='text-2xl cursor-pointer hover:animate-pulse' />
          ) : (
            <MdDarkMode className='text-2xl cursor-pointer hover:animate-pulse' />
          )}
        </button>

        <label htmlFor='my-modal-3'>
          <MdSearch className='text-2xl mx-4 cursor-pointer' />
        </label>

        <input type='checkbox' id='my-modal-3' className='modal-toggle' />
        <div className='modal'>
          <div className='modal-box relative py-12'>
            <label
              htmlFor='my-modal-3'
              className='btn btn-sm btn-circle absolute right-4 top-4'
            >
              ✕
            </label>
            <input
              type='text'
              placeholder='Search'
              className='input border-0 focus:outline-0 border-b border-current w-full max-w-sm block mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

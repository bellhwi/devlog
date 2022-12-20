import { MdDarkMode, MdSearch, MdOutlineWbSunny } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/favicon-32x32.png'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchedPosts, setSearchMode } from '../store'
import { posts } from '../posts'

type Props = {
  home?: Boolean
  header?: String
}

interface RootState {
  searchMode: any
}

const Navbar = ({ home, header }: Props) => {
  const selectSearchMode = (state: RootState) => state.searchMode
  const searchMode = useSelector(selectSearchMode)
  const dispatch = useDispatch()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <div className='flex items-center mt-6'>
      {home ? (
        <p className='text-2xl text-logo font-bold relative bottom-1'>devlog</p>
      ) : (
        <div className='flex items-center'>
          <Link href='/' className='text-xl text-logo font-bold'>
            <Image src={logo} alt='logo' />
          </Link>
          <p className='ml-2 font-bold'>{header}</p>
        </div>
      )}

      <div className='grow'></div>
      {home ? (
        <div className='items-center mr-4 hidden sm:flex'>
          <MdSearch className='text-2xl mr-0.5' />
          <input
            type='text'
            placeholder='Search by title'
            className='input input-xs border-0 focus:outline-0 border-b border-current w-full max-w-sm block mx-auto'
            onChange={(e) => {
              // Searching keywords
              if (e.target.value != '') {
                const searchedPosts = posts.filter((post: any) => {
                  return post.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                })

                dispatch(setSearchedPosts(searchedPosts))

                if (searchMode) return
                dispatch(setSearchMode(true))
              }
              // Empty search input
              else {
                dispatch(setSearchMode(false))
              }
            }}
          />
        </div>
      ) : null}

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
      </div>
    </div>
  )
}

export default Navbar

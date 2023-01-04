import { AiOutlineRise, AiOutlineFieldTime } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import Link from 'next/link'

const Sort = ({ trendingTab, setTrendingTab }: any) => {
  return (
    <div className='flex items-center mt-8'>
      <div
        className={`flex items-center cursor-pointer mr-4 ${
          trendingTab ? 'font-bold border-b border-current p-1' : null
        }`}
        onClick={() => !trendingTab && setTrendingTab(true)}
      >
        <AiOutlineRise />
        <h4 className='ml-1'>Trending</h4>
      </div>
      <div
        className={`flex items-center cursor-pointer ${
          trendingTab ? null : 'font-bold border-b border-current p-1'
        }`}
        onClick={() => trendingTab && setTrendingTab(false)}
      >
        <AiOutlineFieldTime />
        <h4 className='ml-1'>Latest</h4>
      </div>
      <div className='grow'></div>
      <div className='dropdown dropdown-end'>
        <label tabIndex={0} className='text-xl cursor-pointer'>
          <BiDotsVerticalRounded />
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <a href='mailto:johnnykim94@hotmail.com'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sort

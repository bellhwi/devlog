import { AiOutlineRise, AiOutlineFieldTime } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const Filter = () => {
  return (
    <div className='flex items-center mt-8'>
      <div className='flex items-center mr-2'>
        <AiOutlineRise />
        <h4 className='text-sm ml-0.5'>Trending</h4>
      </div>
      <div className='flex items-center'>
        <AiOutlineFieldTime />
        <h4 className='text-sm ml-0.5'>Latest</h4>
      </div>
      <div>
        <select className='select w-full max-w-xs'>
          <option defaultValue='all'>All time</option>
          <option value='today'>Today</option>
          <option value='week'>This week</option>
          <option value='month'>This month</option>
          <option value='year'>This year</option>
        </select>
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
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Filter

import Card from './Card'
import { posts } from '../posts'

const Main = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 mt-4'>
        {posts.map((post, index) => {
          return <Card post={post} key={index} />
        })}
      </div>
    </div>
  )
}

export default Main

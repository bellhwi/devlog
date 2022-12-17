import Card from './Card'
import { posts } from '../posts'
import { DateTime } from 'luxon'
import Filter from './Filter'
import { useState } from 'react'

const Main = () => {
  const [trendingTab, setTrendingTab] = useState(true)

  const PostsSortedByTrending = posts.slice().sort((a, b) => {
    const beforeLikes = a.likes
    const afterLikes = b.likes
    return afterLikes - beforeLikes
  })

  const PostsSortedByLatestDate = posts.slice().sort((a, b) => {
    const beforeDate: any = DateTime.fromFormat(a.date, 'yyyy-MM-dd')
    const afterDate: any = DateTime.fromFormat(b.date, 'yyyy-MM-dd')
    return afterDate - beforeDate
  })

  return (
    <div>
      <Filter trendingTab={trendingTab} setTrendingTab={setTrendingTab} />
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 mt-4'>
        {trendingTab
          ? PostsSortedByTrending.map((post, index) => {
              return <Card post={post} key={index} />
            })
          : PostsSortedByLatestDate.map((post, index) => {
              return <Card post={post} key={index} />
            })}
      </div>
    </div>
  )
}

export default Main

import Card from './Card'
import { DateTime } from 'luxon'
import Filter from './Filter'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { posts } from '../posts'

interface RootState {
  searchedPosts: any
  searchMode: Boolean
}

const Main = () => {
  const selectSearchedPosts = (state: RootState) => state.searchedPosts
  const selectSearchMode = (state: RootState) => state.searchMode
  const searchMode = useSelector(selectSearchMode)
  const searchedPosts = useSelector(selectSearchedPosts)
  const [trendingTab, setTrendingTab] = useState(true)

  const sortPostsByTrending = (posts: any) => {
    const sortedPosts = posts.slice().sort((a: any, b: any) => {
      const beforeLikes = a.likes
      const afterLikes = b.likes
      return afterLikes - beforeLikes
    })
    return sortedPosts
  }

  const sortPostsByLatestDate = (posts: any) => {
    const sortedPosts = posts.slice().sort((a: any, b: any) => {
      const beforeDate: any = DateTime.fromFormat(a.date, 'yyyy-MM-dd')
      const afterDate: any = DateTime.fromFormat(b.date, 'yyyy-MM-dd')
      return afterDate - beforeDate
    })

    return sortedPosts
  }

  return (
    <div>
      <Filter trendingTab={trendingTab} setTrendingTab={setTrendingTab} />
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 mt-4'>
        {searchMode
          ? trendingTab
            ? sortPostsByTrending(searchedPosts).map(
                (post: any, index: any) => {
                  return <Card post={post} key={index} />
                }
              )
            : sortPostsByLatestDate(searchedPosts).map(
                (post: any, index: any) => {
                  return <Card post={post} key={index} />
                }
              )
          : trendingTab
          ? sortPostsByTrending(posts).map((post: any, index: any) => {
              return <Card post={post} key={index} />
            })
          : sortPostsByLatestDate(posts).map((post: any, index: any) => {
              return <Card post={post} key={index} />
            })}
      </div>
    </div>
  )
}

export default Main

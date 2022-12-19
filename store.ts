import { configureStore, createSlice } from '@reduxjs/toolkit'

const searchedPosts = createSlice({
  name: 'searchedPosts',
  initialState: null,
  reducers: {
    setSearchedPosts(state, action) {
      return action.payload
    },
  },
})

export const { setSearchedPosts } = searchedPosts.actions

const searchMode = createSlice({
  name: 'searchMode',
  initialState: false,
  reducers: {
    setSearchMode(state, action) {
      return action.payload
    },
  },
})

export const { setSearchMode } = searchMode.actions

export default configureStore({
  reducer: {
    searchedPosts: searchedPosts.reducer,
    searchMode: searchMode.reducer,
  },
})

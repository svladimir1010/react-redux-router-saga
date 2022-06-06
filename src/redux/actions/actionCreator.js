import {
  SET_LATEST_NEWS, SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS,
} from '../constants'

export const setLatestNews = ( payload ) => ({
  type: SET_LATEST_NEWS,
  payload,
})

export const setLatestNewsError = ( payload ) => ({
  type: SET_LATEST_NEWS_ERROR,
  payload,
})

export const setPopularNews = ( payload ) => ({
  type: SET_POPULAR_NEWS,
  payload,
})


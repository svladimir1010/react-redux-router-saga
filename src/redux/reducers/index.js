import { combineReducers } from 'redux'
import news from './news'
import errors from './errors'
import loader from './loader'
import { createRouterReducer } from '@lagunovsky/redux-react-router'
import { createBrowserHistory } from 'history'

export const browserHistory = createBrowserHistory()

const rootReducer = combineReducers( {
  news,
  errors,
  loader,
  router: createRouterReducer( browserHistory ),

} )

export default rootReducer

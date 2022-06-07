import { takeEvery, put, call, fork, all, spawn, select } from 'redux-saga/effects'
import { ROUTER_ON_LOCATION_CHANGED } from '@lagunovsky/redux-react-router'

import {
  SET_LOADING_DATA,
} from '../constants'
import { setLatestNews, setLatestNewsError, setPopularNews, setPopularNewsError } from '../actions/actionCreator'
import { getLatestNews, getPopularNews } from '../../api/index'

export function * handleLatestNews() {
  try {
    const { hits } = yield call( getLatestNews, 'react' )
    yield put( setLatestNews( hits ) )
  } catch {
    yield put( setLatestNewsError( 'Error fetching latest news!' ) )
    // yield put({ type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news' });
  }
}

export function * handlePopularNews() {
  try {
    const { hits } = yield call( getPopularNews )
    yield put( setPopularNews( hits ) )
  } catch {
    yield put( setPopularNewsError( 'Error fetching popular news' ) )
  }
}

export function * watchNewsSaga() {
  yield put( { type: SET_LOADING_DATA, payload: true } )
  const path = yield select( ( { router } ) => router.location.pathname )
  if( path === '/popular-news' ) {
    yield call( handlePopularNews )
  }
  if( path === '/latest-news' ) {
    yield call( handleLatestNews )
  }
  yield put( { type: SET_LOADING_DATA, payload: false } )
}


export default function * rootSaga() {
  yield takeEvery( ROUTER_ON_LOCATION_CHANGED, watchNewsSaga )
}

// неблокирующие эффекты fork, spawn

// join() блокирует дальнейшее исполнение пока не будет получит заданный результат

// задержка и блокировка выполнения кода до своего выполнения
// yield delay(2000);  console.log(' Something ')

// предотвращение многочисленных вызовов saga
// yield throttle(5000, LOCATION_CHANGED, () => console.log(' Something ') )

// retry автоматический перезапуск sag в фоновом режиме
// export default function* error(){
//   console.log('!!!')
//   throw new Error('Test Error')}
// export default function * rootSaga() {
//   yield retry(5, 2000, error)  // перезапуск 5 раз каждые 2 сек
//   yield takeEvery( ROUTER_ON_LOCATION_CHANGED, watchNewsSaga )
// }

// call, apply разница в передаче аргументов call( getLatestNews, 'react' ) или apply( getLatestNews, [react,] )

// cancel - отмена запуска процесса
// if(true) cancel(getPopularNews)
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

import { createRouterMiddleware } from '@lagunovsky/redux-react-router'
import { browserHistory } from './reducers'


const routerMiddleware = createRouterMiddleware( browserHistory )

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
          typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
              window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__( {} ) : compose

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers( applyMiddleware( routerMiddleware, sagaMiddleware ) ),
)

const store = configureStore({});
sagaMiddleware.run(rootSaga);

export default store;

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router'
import { ReduxRouter } from '@lagunovsky/redux-react-router'
import Home from './pages/home/home'
import LatestNews from './pages/latest-news/latest-news'
import PopularNews from './pages/popular-news/popular-news'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import store from './redux/store'
import { browserHistory } from './redux/reducers'

ReactDOM.render(
    <Provider store={ store }>
        <ReduxRouter
            history={ browserHistory }
            store={ store }
        >
            <App>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/latest-news" element={ <LatestNews/> }/>
                    <Route path="/popular-news" element={ <PopularNews/> }/>
                </Routes>
            </App>
        </ReduxRouter>
    </Provider>,

    document.getElementById( 'root' ),
)

reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, Routes, Switch } from 'react-router'
import Home from './pages/home/home'
import LatestNews from './pages/latest-news/latest-news'
import PopularNews from './pages/popular-news/popular-news'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import { createBrowserHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'


const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/latest-news" element={ <LatestNews/> }/>
                    <Route path="/popular-news" element={ <PopularNews/> }/>
                </Routes>
            </App>
        </BrowserRouter>

    </Provider>,

    document.getElementById( 'root' ),
)


reportWebVitals();

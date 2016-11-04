/**
 * Created by Roi on 21/07/2016.
 */
import React from 'react'
import { render } from 'react-dom'
import io from 'socket.io-client'
import socketIO from './socketIO'

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from '../redux/store'

// import Components
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'


// socket.io client listening to server and handling events.
const socket = io('http://localhost:7000');
socketIO(socket, store);

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Login}></IndexRoute>
                <Route path="/home" component={Home}></Route>
            </Route>
        </Router>
    </Provider>
);

render(
    router,
    document.getElementById('root')
);
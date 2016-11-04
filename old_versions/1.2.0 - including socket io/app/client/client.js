/**
 * Created by Roi on 21/07/2016.
 */
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import actions from '../redux/actions'

let initialState = {
    todos: [{
        id: 0,
        completed: false,
        text: 'Initial todo for demo purposes'
    }],
    user: {
        username: 'Roi',
        id: 1
    },
    date: {
        text: '-'
    }
};

let store = configureStore(initialState)

const socket = io('http://localhost:7000')
socket.on('date', date =>
    store.dispatch(actions.changeDate(date))
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
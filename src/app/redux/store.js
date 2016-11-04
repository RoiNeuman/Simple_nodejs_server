/**
 * Created by Roi on 24/07/2016.
 */
import { applyMiddleware, compose, createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from './reducers'

// import redux dev Tools
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const initialState = {
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

let finalCreateStore = compose(
    applyMiddleware(thunk, logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

function configureStore(initialState = { todos: [], user: {}, date: {} }) {
    return finalCreateStore(rootReducer, initialState)
}

let store = configureStore(initialState);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
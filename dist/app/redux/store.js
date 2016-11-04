'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.history = undefined;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import redux dev Tools
/**
 * Created by Roi on 24/07/2016.
 */
var initialState = {
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

// import the root reducer


var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)()), window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
})(_redux.createStore);

function configureStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { todos: [], user: {}, date: {} };

    return finalCreateStore(_reducers2.default, initialState);
}

var store = configureStore(initialState);

var history = exports.history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers/', function () {
        var nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

exports.default = store;
//# sourceMappingURL=store.js.map
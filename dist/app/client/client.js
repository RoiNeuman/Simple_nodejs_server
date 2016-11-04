'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _socketIO = require('./socketIO');

var _socketIO2 = _interopRequireDefault(_socketIO);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _store = require('../redux/store');

var _store2 = _interopRequireDefault(_store);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Login = require('./components/Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// socket.io client listening to server and handling events.


// import react router deps
/**
 * Created by Roi on 21/07/2016.
 */
var socket = (0, _socket2.default)('http://localhost:7000');

// import Components

(0, _socketIO2.default)(socket, _store2.default);

var router = _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _store.history },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/', component: _App2.default },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _Login2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _Home2.default })
        )
    )
);

(0, _reactDom.render)(router, document.getElementById('root'));
//# sourceMappingURL=client.js.map
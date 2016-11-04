'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _todoReducer = require('./todoReducer');

var _todoReducer2 = _interopRequireDefault(_todoReducer);

var _userReducer = require('./userReducer');

var _userReducer2 = _interopRequireDefault(_userReducer);

var _dateReducer = require('./dateReducer');

var _dateReducer2 = _interopRequireDefault(_dateReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    todos: _todoReducer2.default,
    user: _userReducer2.default,
    date: _dateReducer2.default,
    routing: _reactRouterRedux.routerReducer
}); /**
     * Created by Roi on 24/07/2016.
     */
exports.default = rootReducer;
//# sourceMappingURL=index.js.map
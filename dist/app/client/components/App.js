'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../../redux/actions');

var _actions2 = _interopRequireDefault(_actions);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Roi on 21/07/2016.
 */
function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(_actions2.default, dispatch)
    };
}

var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Main2.default);

exports.default = App;
//# sourceMappingURL=App.js.map
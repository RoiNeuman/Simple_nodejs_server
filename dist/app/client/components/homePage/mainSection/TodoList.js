'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('C:\\Users\\Roi\\workspace\\Simple_nodejs_server\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\Users\\Roi\\workspace\\Simple_nodejs_server\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\Users\\Roi\\workspace\\Simple_nodejs_server\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TodoItem = require('./TodoItem');

var _TodoItem2 = _interopRequireDefault(_TodoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    TodoList: {
        displayName: 'TodoList'
    }
};

var _CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/app/client/components/homePage/mainSection/TodoList.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/app/client/components/homePage/mainSection/TodoList.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformHmrLibIndexJs2(_CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} /**
   * Created by Roi on 24/07/2016.
   */


var TodoList = _wrapComponent('TodoList')(function (_Component) {
    _inherits(TodoList, _Component);

    function TodoList() {
        _classCallCheck(this, TodoList);

        return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
    }

    _createClass(TodoList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react3.default.createElement(
                'ul',
                null,
                this.props.todos.map(function (todo) {
                    return _react3.default.createElement(_TodoItem2.default, { key: todo.id, todo: todo, actions: _this2.props.actions });
                })
            );
        }
    }]);

    return TodoList;
}(_react2.Component));

exports.default = TodoList;
//# sourceMappingURL=TodoList.js.map
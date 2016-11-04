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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    UserInfo: {
        displayName: 'UserInfo'
    }
};

var _CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/app/client/components/homePage/mainSection/UserInfo.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/app/client/components/homePage/mainSection/UserInfo.js',
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


var UserInfo = _wrapComponent('UserInfo')(function (_Component) {
    _inherits(UserInfo, _Component);

    function UserInfo() {
        _classCallCheck(this, UserInfo);

        return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
    }

    _createClass(UserInfo, [{
        key: 'handleNewId',
        value: function handleNewId() {
            this.props.actions.createNewUserId();
        }
    }, {
        key: 'handleNewIdIfOdd',
        value: function handleNewIdIfOdd() {
            this.props.actions.createNewUserIdIfOdd();
        }
    }, {
        key: 'handleNewIdAsync',
        value: function handleNewIdAsync() {
            this.props.actions.createNewUserIdAsync();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'li',
                null,
                _react3.default.createElement(
                    'div',
                    null,
                    'username: ',
                    this.props.user.username
                ),
                _react3.default.createElement(
                    'div',
                    null,
                    'id: ',
                    this.props.user.id
                ),
                _react3.default.createElement(
                    'button',
                    { onClick: this.handleNewId.bind(this) },
                    'Update with random ID'
                ),
                _react3.default.createElement(
                    'button',
                    { onClick: this.handleNewIdIfOdd.bind(this) },
                    'Update only if odd'
                ),
                _react3.default.createElement(
                    'button',
                    { onClick: this.handleNewIdAsync.bind(this) },
                    'Update async'
                )
            );
        }
    }]);

    return UserInfo;
}(_react2.Component));

exports.default = UserInfo;
//# sourceMappingURL=UserInfo.js.map
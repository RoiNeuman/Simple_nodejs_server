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

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Login: {
        displayName: 'Login'
    }
};

var _CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/app/client/components/Login.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/app/client/components/Login.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformHmrLibIndexJs2(_CUsersRoiWorkspaceSimple_nodejs_serverNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} /**
   * Created by Roi on 31/07/2016.
   */


// import components


if (process.env.BROWSER) {
    require("../style/login.css");
}

var Login = _wrapComponent('Login')(function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    'header',
                    { className: 'login-title' },
                    _react3.default.createElement(
                        _reactRouter.Link,
                        { to: '/' },
                        _react3.default.createElement(
                            'h1',
                            null,
                            _react3.default.createElement(
                                'b',
                                null,
                                'Login Page'
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'section',
                    { id: 'login-section', className: 'login-section' },
                    _react3.default.createElement(
                        _reactRouter.Link,
                        { to: '/home' },
                        _react3.default.createElement(
                            'button',
                            { id: 'login-btn', className: 'login-btn' },
                            _react3.default.createElement(
                                'span',
                                null,
                                'Login '
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react2.Component));

exports.default = Login;
//# sourceMappingURL=Login.js.map
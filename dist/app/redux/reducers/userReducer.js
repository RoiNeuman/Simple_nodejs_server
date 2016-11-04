'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Roi on 24/07/2016.
 */
function userReducer() {
    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'CREATE_USE_ID':
            return {
                username: user.username,
                id: action.id
            };
        default:
            return user;
    }
}

exports.default = userReducer;
//# sourceMappingURL=userReducer.js.map
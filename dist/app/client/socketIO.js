'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('../redux/actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function socketIO(socket, store) {

    socket.on('date', function (date) {
        return store.dispatch(_actions2.default.changeDate(date));
    });
} /**
   * Created by Roi on 01/08/2016.
   */
exports.default = socketIO;
//# sourceMappingURL=socketIO.js.map
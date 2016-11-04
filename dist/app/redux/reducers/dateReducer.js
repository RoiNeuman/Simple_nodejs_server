'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Roi on 28/07/2016.
 */
function dateReducer() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'CHANGE_DATE':
            var newDate = Object.assign({}, date);
            newDate.text = action.date.date;
            return newDate;
        default:
            return date;
    }
}

exports.default = dateReducer;
//# sourceMappingURL=dateReducer.js.map
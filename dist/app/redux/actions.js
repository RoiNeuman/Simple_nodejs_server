'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Roi on 24/07/2016.
 */
var actions = {
    addTodo: function addTodo(text) {
        return {
            type: 'ADD_TODO',
            text: text
        };
    },

    completeTodo: function completeTodo(id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        };
    },

    deleteTodo: function deleteTodo(id) {
        return {
            type: 'DELETE_TODO',
            id: id
        };
    },

    changeDate: function changeDate(date) {
        return {
            type: 'CHANGE_DATE',
            date: date
        };
    },

    createNewUserId: function createNewUserId() {
        return {
            type: 'CREATE_USE_ID',
            id: Math.round(Math.random() * 100)
        };
    },

    createNewUserIdIfOdd: function createNewUserIdIfOdd() {
        return function (dispatch, getState) {
            var _getState = getState(),
                user = _getState.user;

            if (user.id % 2 === 0) {
                return;
            }
            dispatch(actions.createNewUserId());
        };
    },

    createNewUserIdAsync: function createNewUserIdAsync() {
        return function (dispatch) {
            setTimeout(function () {
                dispatch(actions.createNewUserId());
            }, 2500);
        };
    }
};

exports.default = actions;
//# sourceMappingURL=actions.js.map
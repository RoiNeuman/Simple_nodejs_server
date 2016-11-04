/**
 * Created by Roi on 24/07/2016.
 */
let actions = {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    },

    completeTodo: function(id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },

    deleteTodo: function(id) {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },

    changeDate: function(date) {
        console.log(date);
        return {
            type: 'CHANGE_DATE',
            date: date
        }
    },

    createNewUserId: function () {
        return {
            type: 'CREATE_USE_ID',
            id: Math.round(Math.random() * 100)
        }
    },

    createNewUserIdIfOdd: function () {
        return (dispatch, getState) => {
            const { user } = getState()
            if(user.id % 2 === 0) {
                return
            }
            dispatch(actions.createNewUserId())
        }
    },

    createNewUserIdAsync: function () {
        return (dispatch) => {
            setTimeout(() => {
                dispatch(actions.createNewUserId())
            }, 2500)
        }
    }
}

export default actions
/**
 * Created by Roi on 24/07/2016.
 */
import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    todos: todoReducer,
    user: userReducer
})

export default rootReducer
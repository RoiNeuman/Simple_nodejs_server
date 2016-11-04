/**
 * Created by Roi on 24/07/2016.
 */
import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import dateReducer from './dateReducer'

const rootReducer = combineReducers({
    todos: todoReducer,
    user: userReducer,
    date: dateReducer
})

export default rootReducer
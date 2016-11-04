/**
 * Created by Roi on 24/07/2016.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import todos from './todoReducer'
import user from './userReducer'
import date from './dateReducer'

const rootReducer = combineReducers({
    todos,
    user,
    date,
    routing: routerReducer
});

export default rootReducer
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {commentsReducer} from '../reducers'


let store = null

export default {
    createStore : ()=>{
        const reducers = combineReducers({
            comments : commentsReducer
        })
        store = createStore(
            reducers, 
            applyMiddleware(
                thunk, logger
            )
        )
        return store
    },
    currentStore : ()=>{
        return store
    }
}
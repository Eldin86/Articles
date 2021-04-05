import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {newsListReducer} from './reducers/newsReducers'

const reducer = combineReducers({
    newsList: newsListReducer
})


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
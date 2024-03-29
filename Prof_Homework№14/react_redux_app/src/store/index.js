import {createStore, combineReducers} from 'redux';
import { productReducer } from './productReducer'

const rootReducer = combineReducers({
    product: productReducer,
})

export const store = createStore(rootReducer)
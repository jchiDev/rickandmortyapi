import {combineReducers} from 'redux';
import { itemReducer, selecteditemReducer } from './itemReducer';

const reducers = combineReducers({
    allItems: itemReducer,
    item: selecteditemReducer,
});

export default reducers
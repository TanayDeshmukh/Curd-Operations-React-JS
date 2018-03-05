import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'; 
import listingStore from './reducer-listing';

const reducers = combineReducers({
    listingStore
});

export default createStore(reducers, applyMiddleware(ReduxThunk));
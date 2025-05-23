import { createStore, applyMiddleware } from 'redux';
import countReducer from './count_reducer';

import { thunk } from 'redux-thunk'; // 引入redux-thunk中间件

export default createStore(countReducer, applyMiddleware(thunk)); // 使用redux-thunk中间件
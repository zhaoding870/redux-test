import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // 引入redux-thunk中间件
// 引入redux-devtools-extension以便在开发者工具中使用Redux DevTools
import {composeWithDevTools} from 'redux-devtools-extension'; 

import allReducers from './reducers'; // 引入所有的reducer

// 创建redux的store对象，传入reducer和中间件
// 使用redux-thunk中间件
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
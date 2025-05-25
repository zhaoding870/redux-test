import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // 引入redux-thunk中间件
import {composeWithDevTools} from 'redux-devtools-extension'; // 引入redux-devtools-extension以便在开发者工具中使用Redux DevTools

import countReducer from './reducers/count'; // 引入countReducer
import personReducer from './reducers/person'; // 引入personReducer

const allReducers = combineReducers({
  count: countReducer, // 将countReducer注册到store中
  persons: personReducer, // 如果有personReducer，可以在这里注册
});

// 创建redux的store对象，传入reducer和中间件
// 使用redux-thunk中间件
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
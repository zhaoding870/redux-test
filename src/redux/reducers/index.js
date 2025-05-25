import { combineReducers } from "redux";

import count from "./count";
import persons from "./person";

const allReducers = combineReducers({
  count, // 将countReducer注册到store中
  persons, // 如果有personReducer，可以在这里注册
});
// 导出所有的reducer
export default allReducers; // 导出所有的reducer
// 这样在store.js中就可以直接引入allReducers了
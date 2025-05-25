import {ADD_PERSON} from '../constant'

const initState = [{ id: '001', name: 'tom', age: 18 }];
// 初始化人员状态
export default function personReducer(preState = initState, action) {
  // console.log('personReducer', preState, action);
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
// 处理人员相关的reducer
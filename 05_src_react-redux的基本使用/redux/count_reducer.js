import { INCREMENT, DECREMENT } from './constant'

//初始化状态
const initState = 0;
export default function countReducer(preState = initState, action){
    // console.log(preState)
    const {data, type} = action;
    switch (type){
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}
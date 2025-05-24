import { INCREMENT, DECREMENT } from './constant'

// 同步 action 
export const createIncrementAction = data => ({type: INCREMENT, data});
export const createDecrementAction = data => ({type: DECREMENT, data});

// 异步 action
export const createIncrementSyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    }
};
import { connect } from 'react-redux';

import CountUI from '../../components/Count';
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementSyncAction
} from '../../redux/count_action';

//mapStateToProps函数
// 该函数返回一个对象，该对象的key作为传递给UI组件的props的key，value作为传递给UI组件的props的value
// 该函数的返回值会作为props传递给UI组件
// 该函数的第一个参数是redux中的state
// 该函数的返回值会作为props传递给UI组件
const mapStateToProps = (state) => {
  return {
    count: state
  };
};

// mapDispatchToProps函数
// 该函数返回一个对象，该对象的key作为传递给UI组件的props的key，value作为传递给UI组件的props的value
// 该函数的第一个参数是dispatch函数
const mapDispatchToProps = (dispatch) => {
  return {
    increment: number => dispatch(createIncrementAction(number)),
    decrement: number => dispatch(createDecrementAction(number)),
    sysnIncrement: (number, time) => dispatch(createIncrementSyncAction(number, time))
  };
};

// connect函数
// connect函数是一个高阶组件，它接受两个参数：mapStateToProps和mapDispatchToProps
// connect函数返回一个函数，该函数接受一个UI组件作为参数，返回一个新的组件
// 该新的组件会将redux中的state和dispatch函数作为props传递给UI组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
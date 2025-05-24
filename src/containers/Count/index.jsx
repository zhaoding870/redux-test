import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    createDecrementAction,
    createIncrementAction,
    createIncrementSyncAction
} from '../../redux/count_action';

// 该组件是一个容器组件，负责与redux进行交互
class Count extends Component {

    increment = () => {
        const selectValue = this.selectCount.value * 1;
        const { increment } = this.props;
        // 调用父组件传递过来的increment函数
        increment(selectValue);
    }

    decrement = () => {
        const selectValue = this.selectCount.value * 1;
        const { decrement } = this.props;
        // 调用父组件传递过来的decrement函数
        decrement(selectValue);
    }

    incrementIfOdd = () => {
        const selectValue = this.selectCount.value * 1;
        const { count, increment } = this.props;
        // 如果当前的count是奇数，则调用父组件传递过来的increment函数
        if (count % 2 !== 0) {
            increment(selectValue);
        }
    }

    sysnIncrement = () => {
        const selectValue = this.selectCount.value * 1; 
        const { sysnIncrement } = this.props;
        // 调用父组件传递过来的sysnIncrement函数
        sysnIncrement(selectValue, 1000);
    }

    render() {
        const { count } = this.props;
        return (
        <div>
            <h2>计算结果是： {count}</h2>
            <br/>
            <select ref={ c => this.selectCount = c }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
            <button onClick={this.sysnIncrement}>异步加</button>&nbsp;
        </div>
        )
    }
}


// connect函数
export default connect(
  state => ({count: state}), 
  // mapStateToProps 的一般写法
  // dispatch => (
  //   {
  //     increment: number => dispatch(createIncrementAction(number)),
  //     decrement: number => dispatch(createDecrementAction(number)),
  //     sysnIncrement: (number, time) => dispatch(createIncrementSyncAction(number, time))
  //   }
  // )

  // mapDispatchToProps 的简写
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    sysnIncrement: createIncrementSyncAction
  }
)(Count);
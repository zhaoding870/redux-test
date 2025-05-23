import React, { Component } from 'react';
import store from '../../redux/store';

import { createIncrementAction, createDecrementAction, 
    createIncrementSyncAction } from '../../redux/count_action';

export default class Count extends Component {
    // state = {count: 0}

    // componentDidMount(){
    //     store.subscribe(() => {
    //         this.setState({});
    //     });
    // }

    increment = () => {
        const selectValue = this.selectCount.value * 1;
        store.dispatch(createIncrementAction(selectValue));
    }

    decrement = () => {
        const selectValue = this.selectCount.value * 1;
        store.dispatch(createDecrementAction(selectValue));
    }

    incrementIfOdd = () => {
        const count = store.getState();
        const selectValue = this.selectCount.value * 1;
        if( count % 2 !== 0 ) {
            store.dispatch(createIncrementAction(selectValue));
        }
    }

    sysnIncrement = () => {
        const selectValue = this.selectCount.value * 1;
        // setTimeout( () => {
        store.dispatch(createIncrementSyncAction(selectValue, 500));
        // }, 1000 );
    }

    render() {
        return (
        <div>
            <h2>计算结果是： {store.getState()}</h2>
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

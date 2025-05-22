import React, { Component } from 'react';
import store from '../../redux/store'

export default class Count extends Component {
    // state = {count: 0}

    // componentDidMount(){
    //     store.subscribe(() => {
    //         this.setState({});
    //     });
    // }

    increment = () => {
        const selectValue = this.selectCount.value;
        store.dispatch({
            type: 'increment',
            data: selectValue * 1
        });
    }

    decrement = () => {
        const selectValue = this.selectCount.value;
        store.dispatch({
            type: 'decrement',
            data: selectValue * 1
        });
    }

    incrementIfOdd = () => {
        const count = store.getState();
        const selectValue = this.selectCount.value;
        if( count % 2 !== 0 ) {
            store.dispatch({
                type: 'increment',
                data: selectValue * 1
            });
        }
    }

    sysnIncrement = () => {
        const selectValue = this.selectCount.value;
        setTimeout( () => {
            store.dispatch({
                type: 'increment',
                data: selectValue * 1
            });
        }, 1000 );
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

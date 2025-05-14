import React, { Component } from 'react'

export default class index extends Component {
    state = {count: 0}

    increment = () => {
        const { count } = this.state;
        const selectValue = this.selectCount.value;
        this.setState({ count: count + selectValue * 1 });
    }

    decrement = () => {
        const { count } = this.state;
        const selectValue = this.selectCount.value;
        this.setState({ count: count - selectValue * 1 });
    }

    incrementIfOdd = () => {
        const { count } = this.state;
        const selectValue = this.selectCount.value;
        if( count % 2 !== 0 ) {
            this.setState({ count: count + selectValue * 1 });
        }
    }

    sysnIncrement = () => {
        const { count } = this.state;
        const selectValue = this.selectCount.value;
        setTimeout( () => {
            this.setState({ count: count + selectValue * 1 });
        }, 1000 );
    }

    render() {
        const { count } = this.state;
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

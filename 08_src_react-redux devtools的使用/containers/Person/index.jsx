import React, { Component } from 'react';
import {nanoid} from 'nanoid'; // 引入nanoid库用于生成唯一ID
import {connect} from 'react-redux'; // 引入react-redux库用于连接redux

import { createAddPersonAction } from '../../redux/actions/person'; // 引入添加人员的action

class Person extends Component {
    addPerson = () => {
        // 获取输入的姓名和年龄
        const name = this.nameNode.value;
        const age = this.ageNode.value * 1;

        const personObj = { id: nanoid(), name, age }; // 创建一个新的人员对象
        // 调用redux的action来添加人员
        this.props.addPerson(personObj);
        // 清空输入框
        this.nameNode.value = '';
        this.ageNode.value = '';
    }
    render() {
        // 这里可以使用this.props.persons来获取redux中的人员列表
        const { persons, count } = this.props;

        return (
            <div>
            <h2>我是 Person 组件, 上方组件求和为： {count}</h2>
            <input type="text" ref={c => this.nameNode = c} placeholder='输入姓名'/>&nbsp;
            <input type="text" ref={c => this.ageNode = c} placeholder='输入年龄'/>&nbsp;
            <button onClick={this.addPerson}>添加</button>
            <ul>
                {
                    persons.map((person) => {
                        return <li key={person.id}>姓名：{person.name}，年龄：{person.age}</li>
                    })
                }
            </ul>
            </div>
        )
    }
}

// 使用connect函数连接redux
export default connect(
    // 映射状态到组件的props
    state => ({ 
        persons: state.persons,
        count: state.count, // 如果需要使用count状态，可以在这里映射
    }),
    // 映射操作状态的方法到组件的props
    {
        addPerson: createAddPersonAction
    } 
)(Person); // 返回一个新的组件，连接了redux的store

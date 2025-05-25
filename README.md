## 1. 求和案例_redux精简版
    a. 去除Count组件自身状态
    b. src 下建立
        -src
            -redux
                -store.js
                -count_reducer.js
    c. store.js
        1. 引入 redux 中的 createStore 函数，创建一个store
        2. createStore 调用时，需要传入一个为其服务的reducer
        3. 暴露 store 
    d. count_reducer.js
        1. reducer 本质上是一个函数，接收：preState, action,返回加工后的专题
        2. reducer 有俩个作用：初始化状态，加工状态
        3. reducer 被第一次调用时，是 store 自动触发的，传递的 preState 是 undefined
    e. 在 index.js 中检测 store 中状态的改变，一旦发生改变，重新渲染 <App/>
        (redux 只负责管理状态，至于状态的改变驱动着页面更新，需要自己去做)

## 2. 求和案例_redux完整版
    新增文件
        1. count_action.js 用于创建 action 对象
        2. constant.js 放置容易写错的 type 值

## 3. 求和案例_redux异步action
    1. 明确：延时的动作不想交给组件自身，想交给 action
    2. 何时需要异步 action: 想要对状态进行操作，但是具体的操作是靠异步任务返回
    3. 具体编码
        1. npm install redux-thunk, 并配置在 store 中
        2. 创建 action 的函数不再返回一般对象，而是一个函数，该函数中实现异步任务
        3. 异步任务有结果后，分发一个同步的 action 去真正操作数据
    4. 异步action不是必须要写的，完全可以组件自身等待异步任务有结果后，再分发同步action 

## 4. 求和案例_react_redux基本使用
    1. 明确俩个概念
        1. UI组件：不能使用任何redux的API，只负责UI的展示与交合
        2. 容器组件：负责和redux通信，将结果交给UI组件
    2. 如何创建一个容器组件——使用react-redux 的 connect 韩式
        connect(mapStateToProps, mapDispatchToProps)(UI组件)
            ——mapStateToProps：映射状态，返回值是一个对象
            ——mapDispatchProps: 映射操作状态的方法，返回值是一个对象
    3. 容器组件的 store 是靠 props 传递进去的，而不是在容器组件中直接引入
    4. mapDispatchToProps 也可以是一个对象

## 5. 求和案例_react_redux优化
    1. 容器组件和UI组件混成一个文件
    2. 无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可
    3. 使用了react-redux后也不需要自己监听redux中状态的改变，容器组件可以自己完成这个工作
    4. mapDispatchToProps 可以简写成一个对象
    5. 一个组件要和 redux 交互，要经过下面几步
        1. 定义好UI组件---不暴露
        2. 引入connect生成一个容器组件，并暴露。写法如下
            connent(
                state => ({key:state}),
                {
                    key:xxxxAction
                }
            )(UI组件)
        3. UI组件中通过 this.props.xxxxx 读取和操作状态

## 6. 求和案例_react_redux数据共享版
    1. 定义一个 Person 组件，和 Count 组件通过 redux 实现共享数据
    2. 为 Person 组件编写： reducer, action. 配置 constant 常量
    3. 重点：Person 的 reducer 和 Count 的 reducer 要使用 combineReducers 进行合并
        合并后的总状态是一个对象
    4. 交给 store 的是一个总 reducer, 最后在组件中取状态的时候，记得取到位

 
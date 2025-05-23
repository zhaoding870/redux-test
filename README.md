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
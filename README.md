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
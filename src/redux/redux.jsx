import { createStore } from 'redux'
import { connect } from 'react-redux'
import Home from '../pages/home/home.jsx'
// 定义一个原始数据
const defaultState = {
  user: null,
  data: {
    test: '001',
    a: 555
  },
  arr: [123, 777]
}
// actions 定义触发的方法;每一个connect定义自己的方法或者写个action.js直接引入
let uploadUser = arg => ({
  type: 'uploadUser',
  arg
})
// reducer 结合方法和状态；触发不同的事件返回不同的状态
let reducer = (state = defaultState, action) => {
  let data = { ...state }
  switch (action.type) {
    case 'uploadUser':
      data.user = action.arg
      return data
    case 'delUser':
      return data
    case 'Aadd':
      data.data.a++
      // 返回的东西和原来的结构一致，不能单独返回data.data.a
      return data
    default:
      return data
  }
}
//创建store;store本质上是一个状态树，保存了所有对象的状态。
const store = createStore(reducer)
// store.dispatch(uploadUser)
// console.log(store.getState())
//需要渲染什么数据;看方法名字；把state状态绑定到props上。里面子元素就可以直接拿取了
function mapStateToProps(state) {
  return {
    reactX: state //只需要一部分就可以取出来；如： userName: state.user
  }
}
//需要触发什么行为；同上
function mapDispatchToProps(dispatch) {
  return {
    uploadUser: arg => dispatch(uploadUser(arg)),
    delUser: () => dispatch({ type: 'delUser' }),
    add: () => dispatch({ type: 'Aadd' })
  }
}

//连接组件;把指定的state和指定的action与React组件连接起来，后面括号里面写UI组件名。链接后的组件props里面就会
//有store的状态了;Provider根组件还是要传一个store = {store};非Provider的子组件想要store状态的时候就需要connect链接
//如son.jsx
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
export { store }
export default App

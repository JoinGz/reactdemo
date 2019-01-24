import { createStore } from 'redux'
import { connect } from 'react-redux';
import Home from "../pages/home/home.jsx";
// 定义一个原始数据
const defaultState = {
  user: 1
}
// actions 定义触发的方法
let uploadUser = {
  type: 'uploadUser'
}
let delUser = {
  type: 'delUser'
}
// reducer 结合方法和状态
let reducer = (state = defaultState, action) =>{
  let y = {...state}
  switch (action.type) {
    case 'uploadUser':
      return 6
    case 'delUser':
      return 7
    default:
      return 1
  }
}
//创建store
const store = createStore(reducer)
// store.dispatch(uploadUser)
// console.log(store.getState())
//需要渲染什么数据;看方法名字；把state状态绑定到props上。里面多深的子元素就可以直接拿取了
function mapStateToProps(state) {
  return {
      reactX2: state
  }
}
//需要触发什么行为；同上
function mapDispatchToProps(dispatch) {
  return {
      uploadUser: () => dispatch(uploadUser),
      delUser: () => dispatch({ type: 'delUser' })
  }
}

//连接组件;把指定的state和指定的action与React组件连接起来，后面括号里面写UI组件名。
let App = connect(mapStateToProps, mapDispatchToProps)(Home)
export {
  store
}
export default App
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Icon } from 'antd'
//需要渲染什么数据;看方法名字；把state状态绑定到props上。里面多深的子元素就可以直接拿取了
function mapStateToProps(state) {
  return {
    reactX: state
  }
}
let uploadUser = arg => ({
  type: 'uploadUser',
  arg
})
//需要触发什么行为；同上
function mapDispatchToProps(dispatch) {
  return {
    uploadUser: arg => dispatch(uploadUser(arg)),
    delUser: () => dispatch({ type: 'delUser' })
  }
}

class Son1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      user: null,
      userName: 99
    }
  }
  emitEmpty = () => {
    this.userNameInput.focus()
    this.setState({ userName: '' })
  }

  onChangeUserName = e => {
    this.setState({ userName: e.target.value })
  }
  changeFatherNum = () => {
    this.props.changeFatherNum2(666)
  }
  componentDidMount() {
    console.log(this.props)
  }
  uploadUser = () => {
    this.props.uploadUser(this.state.userName)
  }
  render() {
    const { userName } = this.state
    const suffix = userName ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null
    return (
      <ul>
        子元素
        <li>
          <button onClick={this.props.changeFatherNum}>
            修改父元素数据为6
          </button>
        </li>
        <li>
          <button onClick={this.changeFatherNum}>传值给父元素为666</button>
        </li>
        <li>父元素现在的数据:{this.props.fatherNum}</li>
        <li>react-redux里面的user值：{this.props.reactX.user}</li>
        <button onClick={this.uploadUser}>改变redux里面的值</button>
        <Input
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={suffix}
          value={userName}
          onChange={this.onChangeUserName}
          ref={node => (this.userNameInput = node)}
        />
        {userName}
      </ul>
    )
  }
}
//连接组件;把指定的state和指定的action与React组件连接起来，后面括号里面写UI组件名。
let Son = connect(
  mapStateToProps,
  mapDispatchToProps
)(Son1)
export default Son

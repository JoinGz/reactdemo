import React, {Component} from 'react'
import { connect } from 'react-redux'
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
    uploadUser: arg => dispatch(uploadUser(arg))
  }
}
class Login1 extends Component {
  login=()=>{
    this.props.uploadUser('autoGz')
    this.props.history.push('/computer')
  }
  render () {
    return (
      <div>
        请登录
        <p onClick={this.login}>用Gz用户名登录</p>
      </div>
    )
  }
}
let Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login1)
export default Login
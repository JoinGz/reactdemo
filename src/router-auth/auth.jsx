import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
function mapStateToProps(state) {
  return {
    isLogin: state.user
  }
}
class AuthorizedRoute1 extends React.Component {
  // constructor (props) {
  //     super(props)
  // }
  render() {
    // 把传入的component结构
    const { component: Component, ...rest } = this.props
    const isLogged = this.props.isLogin
    return (
      <Route
        {...rest}
        render={props => {
            //  权限判断，返回传入组件还是返回login
          return isLogged ? <Component {...props} /> : <Redirect to="/login" />
        }}
      />
    )
  }
}
let AuthorizedRoute = connect(
  mapStateToProps
)(AuthorizedRoute1)
export default AuthorizedRoute

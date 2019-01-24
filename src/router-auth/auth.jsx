import React from 'react'
import { Route, Redirect } from 'react-router-dom'

class AuthorizedRoute extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
          isLogin: true
      }
  }
  render() {
    // 把传入的component结构
    const { component: Component, ...rest } = this.props
    const isLogged = this.state.isLogin
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

export default AuthorizedRoute

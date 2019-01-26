import React, { Component } from 'react'
import './home.less'
// 组件(类)
import SiderDemo from './homeAntd'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Bundle from '../../router-auth/anysc'
const Login = (props) => (
    <Bundle load={() => import('../login/login.jsx')}>
        {(Dashboard) => <Dashboard {...props}/>}
    </Bundle>
);
class Home extends Component {
  constructor(props) {
    super(props)
    // 定义data
    this.state = {
      date: new Date(),
      bool: false
    }
  }
  componentDidMount() {
    // setInterval(() => {
    //   this.changeTime()
    // }, 1000)
    console.log(this.props);
    
  }
  changeTime() {
    this.setState({
      date: new Date()
    })
  }
  changeBool = () => {
    this.setState(prevState => ({
      bool: !prevState.bool
    }))
  }
  render() {
    return (
      <div>
        <div className="home dn">I'm Home!</div>
        <div className="dn">
          现在时间是:{this.state.date.toLocaleTimeString()}
        </div>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={SiderDemo} />
          </Switch>
        </Router>
        {/* <button onClick={this.changeBool}>
          {this.state.bool === true ? 'on' : 'off'}
        </button> */}
      </div>
    )
  }
}
export default Home

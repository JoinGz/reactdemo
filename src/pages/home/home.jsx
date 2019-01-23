import React, { Component } from 'react'
import './home.less'
// 组件(类)
import SiderDemo from './homeAntd'
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
  }
  changeTime() {
    this.setState({
      date: new Date()
    })
  }
  changeBool = () => {
    this.setState((prevState) => ({
      bool: !prevState.bool
    }))
  }
  render() {
    return (
      <div>
        <div className="home">I'm Home!</div>
        <div className="">
          现在时间是:{this.state.date.toLocaleTimeString()}
        </div>
        {/* <SiderDemo/> */}
        <button onClick={this.changeBool}>
          {this.state.bool === true ? 'on' : 'off'}
        </button>
      </div>
    )
  }
}
export default Home

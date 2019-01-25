import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
class Computer extends Component {
  changePath = () => {
    this.props.history.push({
      pathname: '/about',
      query: {
        name: 'inbox'
      }
    })
  }
  render() {
    return (
      <div>
        I'm Computer!
        <p>我是{this.props.match.params.id}号电脑</p>
        <Link to="/">去About</Link>
        <br />
        <Link to="/login">去login</Link>

        <p onClick={this.changePath}>动态改变</p>
      </div>
    )
  }
}
export default Computer

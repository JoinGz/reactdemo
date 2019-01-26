import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    num: state.data.a
  }
}
let add = arg => ({
  type: 'Aadd',
  arg
})
function mapDispatchToProps(dispatch) {
  return {
    add: arg => dispatch(add(arg)),
  }
}
class Computer1 extends Component {
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
        <div>
          <p>{this.props.num}</p>
          <button onClick={this.props.add} >加</button>
          <button>减</button>
        </div>
      </div>
    )
  }
}
let Computer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Computer1)
export default Computer

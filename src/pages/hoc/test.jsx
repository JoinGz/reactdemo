import React, { Component } from 'react'
export default class test extends  Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'test'
    }
  }
  componentDidMount () {
    console.log('test');
    console.log(this.props)
  }
  render () {
    return (
      <div>
        我是TEST；
        {this.state.test}
      </div>
    )
  }
}
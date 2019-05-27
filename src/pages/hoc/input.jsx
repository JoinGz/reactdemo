import React, { Component } from 'react'
export default class Input extends Component {
  render(){
    console.log('继承的');
    console.log(this.props);
    return (
      <input type="text" {...this.props} />
    )
  }
}
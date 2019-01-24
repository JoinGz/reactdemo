import React, { Component } from 'react'
import Son1 from './son'
export default class Father extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  changeNum(number) {
    let num
    if (number) {
      num = number
    } else {
      num = this.state.num
      num++
    }
    this.setState({
      num: num
    })
  }
  render() {
    return (
      <div>
        父元素
        <p>父元素原始数据： 0</p>
        <p>父元素现在的数据: {this.state.num}</p>
        <p>
          <button onClick={this.changeNum.bind(this,null)}>
            自己累加
          </button>
        </p>
        <Son1
          a="2"
          fatherNum={this.state.num}
          changeFatherNum={this.changeNum.bind(this,6)}
          changeFatherNum2 = {this.changeNum.bind(this)}
        />
      </div>
    )
  }
}

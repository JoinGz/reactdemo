import React, { Component } from 'react'
export default class Son extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  changeFatherNum= ()=> {
    this.props.changeFatherNum2(666)
  }
  componentDidMount () {
    console.log(this.props)
    console.log(this.state);
    
  }
  render() {
    return (
      <ul>
        子元素
        <li>
          <button onClick={this.props.changeFatherNum}>修改父元素数据为6</button>
        </li>
        <li><button onClick={this.changeFatherNum}>传值给父元素为666</button></li>
        <li>父元素现在的数据:{this.props.fatherNum}</li>
        {/* <li>react-redux里面的值：{this.props.reactX.user}</li> */}
      </ul>
    )
  }
}

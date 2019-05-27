import React, { Component } from 'react'
export default function (Com) {
  return class Hocinput extends Component {
    constructor (props) {
      super(props)
      this.state = {
        value: ''
      }
    }
    changeValue = (event) => {
      const { onChange } = this.props;
      this.setState({
        value: event.target.value,
      }, () => {
        if(typeof onChange ==='function'){
          onChange(event);
        }
      })
    }
    render () {
      let newProps =  {
        value:this.state.value,
        onChange: this.changeValue
      }
      return (
        <Com {...newProps}  />
      )
    }
  } 
}
 
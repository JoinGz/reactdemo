import React, { Component } from 'react'
import { Pagination } from 'antd';
export default class Page extends Component {
  render () {
    return (
      <Pagination
      showSizeChanger
      onChange = {this.props.pageChange}
      onShowSizeChange={this.props.onShowSizeChange}
      defaultCurrent={this.props.defaultCurrent}
      total={this.props.total}
      disabled
    />
    )
  }
}
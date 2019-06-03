import React, { Component } from 'react';
import Page from './page';
function PageHOC(Components) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        total: 100,
        defaultCurrent: 1
      };
    }
    onShowSizeChange = (current, pageSize) => {
      this.props.changeData(current, pageSize);
      // this.setState({
      //   total: 500
      // })
    };
    pageChange = (page, pageSize) => {
      console.log(page, pageSize);
      console.log(this.props.url);
      
      // fetch(this.props.url)
      //   .then(res => res.json())
      //   .then(data => {
          // console.log(data);
          this.setState({
            total: 50,
            defaultCurrent:2
          })
        // })
        // .catch(e => console.log('错误:', e));
    };
    render() {
      let props1 = {
        onShowSizeChange: this.onShowSizeChange,
        total: this.state.total,
        defaultCurrent: this.state.defaultCurrent,
        pageChange: this.pageChange
      };
      return <Components {...props1} />;
    }
  };
}
export default PageHOC(Page);

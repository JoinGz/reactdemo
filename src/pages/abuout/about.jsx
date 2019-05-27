import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import hoctest from '../hoc/index.jsx'
import hocc from '../hoc/test.jsx'
import hocinput from '../hoc/hocInput.jsx'
import input from '../hoc/input.jsx'
let Hoccc = hoctest(hocc)
let Input = hocinput(input)
class About extends Component {
  changePath = () => {
    this.props.history.push({
      pathname: '/computer/998',
    });
  };
  componentDidMount(){
    // console.log(this.props);
  }
  render() {
    return (
      <div>
        I'm about!
        <Link to={`${this.props.match.path}/1`}>点我显示子路由</Link>
        <p onClick={this.changePath}>点我动态切换路由;998</p>
        <Route
          path={`${this.props.match.path}/1`}
          render={() => (
            <h1>
              我是子路由<Link to="/computer">点我去computer</Link>
            </h1>
          )}
        />
        <p>我是query参数：{this.props.location.query ? this.props.location.query.name : ''}</p>
        <Hoccc a='123' />
        <Input onChange= {()=>{console.log(1)}} />
      </div>
    );
  }
}
export default About;

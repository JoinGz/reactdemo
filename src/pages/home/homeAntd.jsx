import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// 组件
import About from '../abuout/about.jsx';
import Computer from '../computer/index.jsx';
// 路由事件跳转插件
import PropTypes from 'prop-types';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props, context) {
    super(props, context);
  }
  state = {
    collapsed: false
  };
  toComputer = () => {
    // 失败
    // this.context.router.history.push('/computer')
    // this.context.router.push('/computer')
    // console.log(this.context);
    // this.props.history.push('/some/path')
    // this.props.history.push({
    //   pathname: '/computer',
    //   query: {
    //     name: 'inbox'
    //   }
    // });
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <Link to="/about">
                  <span>关于</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span onClick={this.toComputer}>我的电脑</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Switch>
                  {/* {' '} */}
                  {/*exact实现精确匹配（匹配到第一个就不往下继续匹配）*/}
                  <Route
                    exact
                    path="/"
                    render={() => {
                      return <Redirect to="/about" />;
                    }}
                  />
                  <Route path="/about" component={About} />
                  <Route
                    exact
                    path="/computer"
                    render={() => {
                      return <Redirect to="/computer/1" />;
                    }}
                  />
                  <Route path="/computer/:id" component={Computer} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default SiderDemo;

import React from 'react'

export default class Bundle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mod: null
    }
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load().then(mod => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    // 站位提示
    // let spin = (
    //   <div style={{ textAlign: 'center', marginTop: 50 }}>
    //     <br />
    //     正在玩命加载中。。。
    //   </div>
    // )
    // return this.state.mod ? this.props.children(this.state.mod) : spin
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}

import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import "@tarojs/async-await"
import './app.scss'
import store from './store'
import "taro-ui/dist/style/index.scss"; // 引入组件样式，仅需引入一次即可

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        {/* this.props.children 是将要被渲染的页面 */}
        {this.props.children}
      </Provider>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import "@tarojs/async-await"
import './app.scss'
import store from './store'

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

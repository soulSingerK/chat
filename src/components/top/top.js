import React from 'react'
import './top.scss'

class Top extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="top-wrapper">
        <div className="left">
          <span className="text text-first">已登录(6)</span>
          <span>|</span>
          <span className="text">离线未登录(3)</span>
          <span className="text"><i className="react-icon add-login-wechat">&#xe629;</i>登录微信号</span>
        </div>
        <div className="right">
          <i className="react-icon">&#xe62c;</i>
          <i className="react-icon">&#xe62d;</i>
          <i className="react-icon">&#xe62e;</i>
        </div>
      </div>
    )
  }
}

export default Top
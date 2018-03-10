import React from 'react'
import './left.scss'

class Left extends React.Component {
  constructor (props) {
    super(props)
  }
  selectRouter (icon) {
    
  }
  render () {
    return (
      <div className="left-wrapper">
        <ul className="router-wrapper">
          <li className="router-item" onClick={this.selectRouter.bind(this, '&#xe616;')}><i className="react-icon">&#xe615;</i></li>
          <li className="router-item" onClick={this.selectRouter.bind(this, '&#xe618;')}><i className="react-icon">&#xe617;</i></li>
          <li className="router-item" onClick={this.selectRouter.bind(this, '&#xe61a;')}><i className="react-icon">&#xe619;</i></li>
          <li className="router-item" onClick={this.selectRouter.bind(this, '&#xe61c;')}><i className="react-icon">&#xe61b;</i></li>
          <li className="router-item" onClick={this.selectRouter.bind(this, '&#xe638;')}><i className="react-icon">&#xe637;</i></li>
        </ul>
      </div> 
    )
  }
}

export default Left
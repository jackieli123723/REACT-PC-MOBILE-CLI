import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
  		<header className="header-fixed">
          <a href="javascript:history.go(-1);" className="header-pre"></a>
          <h1>我是导航</h1>
          <button className="close">
              <a href="history.html"></a>
          </button>
          <button className="order">
              <a href="history.html"></a>
          </button>
      </header>
    )
  }
}
import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './router'

// static resources

import './css/base.less'
import './css/main.less'


ReactDOM.render(
  <Routes />,
  document.querySelector('#app')
)
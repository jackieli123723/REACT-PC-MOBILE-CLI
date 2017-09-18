import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import asyncComponent from '../components/async'
import Header from '../components/header'

//异步组件
const Index = asyncComponent(() => import('../pages/index').then(module => module.default))
const About = asyncComponent(() => import('../pages/about').then(module => module.default))

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Link  to="/" >首页</Link>
            <Link  to="/about" >关于</Link>
          </div>

          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
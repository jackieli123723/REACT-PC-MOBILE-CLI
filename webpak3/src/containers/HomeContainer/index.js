import React, {
  Component
} from 'react'
import {
  withRouter
} from 'react-router-dom'
import {
  connect
} from 'react-redux'

class HomeContainer extends Component {
  render() {
    return (
      <div>1首问问页内221容11{'>*_*<'} </div>
    )
  }
}

export default withRouter(connect()(HomeContainer))
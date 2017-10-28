import React, { Component } from 'react'
import { Profiles, Signup, Admin } from '../containers'

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3" style={{background:'#f9f9f9'}}>
          <Profiles />
        </div>

        <div className="col-sm-6">
          Middle
        </div>

        <div className="col-sm-3" style={{background:'#f9f9f9'}}>
          <Admin />
        </div>
      </div>
    )
  }
}

export default Home
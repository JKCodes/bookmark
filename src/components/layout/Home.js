import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3" style={{background:'#f9f9f9'}}>
          Left
        </div>

        <div className="col-sm-6">
          Middle
        </div>

        <div className="col-sm-3" style={{background:'#f9f9f9'}}>
          Right
        </div>
      </div>
    )
  }
}

export default Home
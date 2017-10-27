import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Profiles extends Component {
  
  componentDidMount() {
    APIManager.get('/api/profile', null, (err, response) => {
      console.log(JSON.stringify(response))
    })
  }

  render() {
    return (
      <div>
        Profiles container
      </div>
    )
  }
}

export default Profiles
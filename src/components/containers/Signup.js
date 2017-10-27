import React, { Component } from 'react'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Signup extends Component {

  constructor() {
    super()
    this.state = {
      visitor: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  }

  componentDidMount() {
    // check if logged in
    APIManager.get('/account/currentuser', null, (err, response) => {
      if (err) {
        alert(err)
        return
      }

      if (response.profile == null)
        return

      console.log(JSON.stringify(response.profile))
      this.props.currentUserReceived(response.profile)
    })
  }

  updateVisitor(event) {
    let updated = Object.assign({}, this.state.visitor)
    updated[event.target.id] = event.target.value
    this.setState({
      visitor: updated
    })
  }

  register(event) {
    event.preventDefault()

    APIManager.post('/account/register', this.state.visitor, (err, response) => {
      if (err) {
        let msg = err.message || err
        alert(msg)
      
        return
      }

      this.props.profileCreated(response.profile)
    })
  }

  render() {
    return (
      <div>
        {(this.props.currentUser != null) ? <h2>Welcome {this.props.currentUser.firstName}</h2> :
            <div>
              <h2>Sign Up</h2>
              <input onChange={this.updateVisitor.bind(this)}type="text" placeholder="First Name" id="firstName" /><br />
              <input onChange={this.updateVisitor.bind(this)}type="text" placeholder="Last Name" id="lastName" /><br />
              <input onChange={this.updateVisitor.bind(this)}type="email" placeholder="Email" id="email" /><br />
              <input onChange={this.updateVisitor.bind(this)}type="password" placeholder="Password" id="password" /><br />
              <button onClick={this.register.bind(this)}>Join</button>
            </div>
        }
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    currentUser: state.account.currentUser
  }
}

const dispatchToProps = (dispatch) => {
  return {
    profileCreated: (profile) => dispatch(actions.profileCreated(profile)),
    currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile))
  }
}

export default connect(stateToProps, dispatchToProps)(Signup)
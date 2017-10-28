import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { APIManager } from '../../utils'
import { Signup } from '../presentation'

class Admin extends Component {

  constructor() {
    super()
    this.state = {
      link: ''
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

      this.props.currentUserReceived(response.profile)
    })
  }

  register(visitor) {
    APIManager.post('/account/register', visitor, (err, response) => {
      if (err) {
        let msg = err.message || err
        alert(msg)
      
        return
      }

      this.props.profileCreated(response.profile)
    })
  }

  login(credentials) {
    APIManager.post('/account/login', credentials, (err, response) => {
      if (err) {
        let msg = err.message || err
        alert(msg)
      
        return
      }
      this.props.currentUserReceived(response.profile)
    })
  }

  updateLink(event) {
    this.setState({
      link: event.target.value
    })
  }

  submitLink(event) {
    event.preventDefault()

    const bookmark = {
      profile: this.props.currentUser.id,
      url: this.state.link
    }

    APIManager.post('/api/bookmark', bookmark, (err, response) => {
      if (err) {
        alert(err)
        return
      }

      this.props.bookmarkCreated(response.result)
    })  
  }

  render() {
    return (

      <div>
        {(this.props.currentUser == null) ? <Signup onLogin={this.login.bind(this)} onRegister={this.register.bind(this)} /> :

          <div>
            <h2>Welcome {this.props.currentUser.firstName}</h2>
            <input onChange={this.updateLink.bind(this)} type="text" placeholder="http://www.example.com"/><br />
            <button onClick={this.submitLink.bind(this)} >Submit Link</button>
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
    currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile)),
    bookmarkCreated: (bookmark) => dispatch(actions.bookmarkCreated(bookmark))
  }
}

export default connect(stateToProps, dispatchToProps)(Admin)
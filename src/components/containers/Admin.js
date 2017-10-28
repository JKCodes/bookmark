import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { APIManager } from '../../utils'

class Admin extends Component {

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

  render() {
    return (

      <div>
        {(this.props.currentUser != null) ? <h2>Welcome {this.props.currentUser.firstName}</h2> :
            <div>
              Not Logged In
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

export default connect(stateToProps, dispatchToProps)(Admin)
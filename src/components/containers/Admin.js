import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'


class Admin extends Component {
  render() {
    return (

      <div>
        Admin Component
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
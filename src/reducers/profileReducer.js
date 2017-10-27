import constants from '../constants'

var initialState = {
  list: [] // store all profiles
}

export default (state = initialState, action) => {

  switch (action.type) {

    case constants.PROFILES_RECEIVED:
      console.og("PROFILES_RECEIVED: " + JSON.stringify(action.profiles))

      return state

    default:
      return state

  }
}
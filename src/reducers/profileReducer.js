import constants from '../constants'

var initialState = {
  list: [], // store all profiles
  selected: null
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type) {

    case constants.PROFILES_RECEIVED:
      updated['list'] = action.profiles
      if (action.profiles.length > 0)
        updated['selected'] = action.profiles[0]
      return updated

    case constants.PROFILE_CREATED:
      let updatedList = Object.assign([], updated.list)
      updatedList.push(action.profile)
      updated['list'] = updatedList
      return updated
      
    default:
      return state

  }
}
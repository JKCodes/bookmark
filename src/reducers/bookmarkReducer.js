import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type) {

    case constants.BOOKMARKS_RECEIVED:
      const params = action.params
      const keys = Object.keys(params)
      keys.forEach((key, i) => {
        let value = params[key] // profile ID
        updated[value] = action.bookmarks
      })
      return updated


    default:
      return state
  }

}
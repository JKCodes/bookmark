import constants from '../constants'

export default {

  profileReceived: (profiles) => {
    return {
      type: constants.PROFILES_RECEIVED,
      profiles: profiles
    }
  }

}
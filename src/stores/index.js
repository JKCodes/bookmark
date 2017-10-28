import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { profileReducer, accountReducer, bookmarkReducer } from '../reducers'

var store;
export default {

  configureStore: (initialState) => {

    const reducers = combineReducers({
      profile: profileReducer,
      account: accountReducer,
      bookmark: bookmarkReducer
    })

    store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk)
    )

    return store
  },

  currentStore: () => {
    return store
  }

}
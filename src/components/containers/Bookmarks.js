import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { APIManager } from '../../utils'

class Bookmarks extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  componentDidUpdate() {
    const list = this.props.bookmarks[this.props.selected.id]
    if (list != null)
      return

    const params = {profile: this.props.selected.id}
    APIManager.get('api/bookmark', params, (err, response) => {
      if (err) {
        console.log(err)
        return
      }

      this.props.bookmarksReceived(response.results, params)
    })
  }

  render() {
    const list = (this.props.selected == null) ? null : this.props.bookmarks[this.props.selected.id]

    return (
      <div>
        <h2>Bookmarks</h2>
        <ol>
          {
            (list == null) ? null : list.map((bookmark, i) => {
              return (
                <li key={bookmark.id}>{bookmark.title}</li>
              )
            })
          }
        </ol>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    bookmarks: state.bookmark,
    selected: state.profile.selected
  }
}

const dipatchToProps = (dispatch) => {
  return {
    bookmarksReceived: (bookmarks, params) => dispatch(actions.bookmarksReceived(bookmarks, params))
  }
}

export default connect(stateToProps, dipatchToProps)(Bookmarks)
import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { APIManager } from '../../utils'

class Bookmarks extends Component {

  constructor() {
    super()
    this.state = {
      bookmarks: []
    }
  }

  componentDidMount() {
    APIManager.get('api/bookmark', null, (err, response) => {
      if (err) {
        console.log(err)
        return
      }

      this.props.bookmarksReceived(response.results)
    })
  }

  render() {
    return (
      <div>
        <h2>Bookmarks</h2>
        <ol>
          {
            this.state.bookmarks.map((bookmark, i) => {
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
    bookmarks: state.bookmark
  }
}

const dipatchToProps = (dispatch) => {
  return {
    bookmarksReceived: (bookmarks) => dispatch(actions.bookmarksReceived(bookmarks))
  }
}

export default connect(stateToProps, dipatchToProps)(Bookmarks)
import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotificationFor, clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
  const vote = (id, content) => {
    props.voteFor(id)
    props.setNotificationFor(`Voted for '${content}'`, 5)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {props.anecdotesToShow
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

const anecdotesToShow = (anecdotes, filter) => {
  let toShow = anecdotes
  if (filter) {
    toShow = toShow
      .filter(anecdote => anecdote.content.toUpperCase().includes(filter.toUpperCase()))
  }
  return (toShow)
}

const mapStateToProps = ({ anecdotes, filter }) => {
  return {
    anecdotesToShow: anecdotesToShow(anecdotes, filter)
  }
}

export default connect(
  mapStateToProps,
  { voteFor, setNotificationFor, clearNotification }
)(AnecdoteList)
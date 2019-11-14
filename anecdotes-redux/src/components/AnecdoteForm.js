import React from 'react'
import { createNew } from '../reducers/anecdoteReducer'
import { setNotificationFor } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  const create = async (event) => {
    event.preventDefault()
    const newAnecdote = {
      content: event.target.anecdoteText.value,
      votes: 0
    }

    event.target.anecdoteText.value = ''
    props.createNew(newAnecdote)

    props.setNotificationFor(`Added anecdote '${newAnecdote.content}'`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name='anecdoteText' type='string' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createNew, setNotificationFor }
)(AnecdoteForm)
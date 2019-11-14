import anecdoteService from '../services/anecdotes'

export const voteFor = (id) => {
  return async dispatch => {
    const changed = await anecdoteService.voteFor(id)
    dispatch({
      type: 'VOTE',
      data: changed
    })
  }
}

export const createNew = (anecdote) => {
  return async dispatch => {
    const created = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'CREATE',
      data: created
    })
  }
}

export const initialize = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
      dispatch({
        type: 'INITIALIZE',
        data: anecdotes
      })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const changed = action.data
      return state.map(item =>
        item.id === changed.id ? changed : item
      )
    case 'CREATE':
      const newItem = action.data
      return state.concat(newItem)
    case 'INITIALIZE':
      const anecdotes = action.data
      return anecdotes
    default:
      return state
  }
}

export default reducer
import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (anecdote) => {
  const response = await axios.post(url, anecdote)
  return response.data
}

const voteFor = async (id) => {
  const anecdotes = await axios.get(url)

  const toChange =  anecdotes.data.find(anecdote => anecdote.id === id)

  const changed = {
    ...toChange,
    votes: toChange.votes + 1
  }

  const response = await axios.put(`${url}/${id}`, changed)
  return response.data
}

export default { getAll, createNew, voteFor }
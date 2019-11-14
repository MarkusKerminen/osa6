export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    data: {
      filter: filter
    }
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR'
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      const filter = action.data.filter
      const newState = filter
      return newState
    case 'CLEAR':
      return null
    default:
      return state
  }
}

export default reducer
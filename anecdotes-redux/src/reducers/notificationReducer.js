export const setNotification = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    data: {
      notification: notification
    }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

let timeout = setTimeout(null, 10)

export const setNotificationFor = (notification, seconds) => {
  return dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        notification: notification
      }
    })
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      dispatch({
        type: 'CLEAR'
      })
    }, seconds * 1000)
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      const notification = action.data.notification
      const newState = notification
      return newState
    case 'CLEAR':
      return null
    default:
      return state
  }
}

export default reducer
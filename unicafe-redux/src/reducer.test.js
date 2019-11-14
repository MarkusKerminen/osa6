import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'
import { createStore } from 'redux'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  const store = createStore(counterReducer)

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('actioning thrice works', () => {
    const action = {
      type: 'OK'
    }

    store.dispatch({ type: 'ZERO' })
    store.dispatch(action)
    store.dispatch(action)
    store.dispatch(action)
    expect(store.getState()).toEqual({
      good: 0,
      ok: 3,
      bad: 0
    })
  })

  test('can take all actions', () => {
    const action1 = {
      type: 'GOOD'
    }
    const action2 = {
      type: 'OK'
    }
    const action3 = {
      type: 'BAD'
    }

    store.dispatch({ type: 'ZERO' })
    store.dispatch(action1)
    store.dispatch(action2)
    store.dispatch(action3)
    expect(store.getState()).toEqual({
      good: 1,
      ok: 1,
      bad: 1
    })
  })
})
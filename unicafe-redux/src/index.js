import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

/*
store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})
*/

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const clear = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <button onClick={good}>positive</button> 
      <button onClick={ok}>neutral</button> 
      <button onClick={bad}>negative</button>
      <button onClick={clear}>clear statistics</button>
      <div>positive {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>negative {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)

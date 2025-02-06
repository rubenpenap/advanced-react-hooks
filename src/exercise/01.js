// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const actions = {
  INCREMENT: 'INCREMENT',
}

function countReducer(state, action) {
  const {count} = state
  const {type, step} = action
  const {INCREMENT} = actions
  switch (type) {
    case INCREMENT:
      return {count: count + step}
    default:
      throw new Error(`Unsupported action type: ${type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {INCREMENT} = actions
  const {count} = state
  const increment = () => dispatch({type: INCREMENT, step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

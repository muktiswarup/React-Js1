import Message from './Components/Message/Message'
import Product from './Components/Product/Product'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
const App = () => {
  return (
      <div>
    <Provider store={store}>
      <h1>App Component</h1> <hr />
      <Message/>
    </Provider>
    </div>
  )
    
}

export default App

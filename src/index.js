import React from 'react'
import { render } from 'react-dom'
import App from './component/App'
import './index.css'

//redux
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
    <Provider store={store} >
        <App />
    </Provider>
, document.getElementById('root'))


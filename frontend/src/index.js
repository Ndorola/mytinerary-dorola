import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'

const myStore = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(

    <Provider store={myStore}>
        <App/>,
    </Provider>,
    document.getElementById('root')
)


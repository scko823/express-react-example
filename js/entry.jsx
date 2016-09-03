import React from 'react'
import ReactDOM from 'react-dom'
import { Router , browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

// see './routes.jsx on react router'
import routes from './routes.jsx'
import reducer from './reducer.jsx'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducer)}>
		<Router history={browserHistory} routes={routes} />
	</Provider>

,document.querySelector('#app'))
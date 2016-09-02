import React from 'react'
import ReactDOM from 'react-dom'
import { Router , browserHistory} from 'react-router'
// see './routes.jsx on react router'
import routes from './routes.jsx'


ReactDOM.render(<Router history={browserHistory} routes={routes} />, 

document.querySelector('#app'))
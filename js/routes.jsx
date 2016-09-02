import React from 'react'
import { Link, Router, Route, IndexRoute, browserHistory} from 'react-router'
//Here we have 3 components

let Hello = React.createClass({
	render:function(){
		return <div>
		Hello<br/>
		{/*use Link from react-router to create a tag to where you want*/}
		<Link to="/hi">Go to hi with nested component</Link><br/>
		<Link to="/hi2">Go to hi2</Link><br/>
		<Link to="/hi3/something">Go to hi3</Link>
		</div>
	}
})

let Hi = React.createClass({
	render:function(){
		return <div>
		Hi, here is a nested component
		{/*using {this.props.children}, any components passed as children will render here*/}		
		{this.props.children}
		</div>
	}
})

let Hi2 = React.createClass({
	render:function(){
		return <div>Hi2</div>
	}
})


let Hi3 = React.createClass({
	render:function(){
		return <div>Hi3 with params {JSON.stringify(this.props.params)}</div>
	}
})

export default (
	<Route>
		<Route path="/" component={Hello} />
		<Route path="/hi2" component={Hi2} />
		<Route path="/hi" component={Hi}>
		{/*Here are two possible components being nested inside the /hi route*/}
			{/*IndexRoute mean /hi */}
			<IndexRoute component={Hi2} />
			{/*this refer to /hi/another_hi*/}
			<Route path="another_hi" component={Hi2} />
		</Route>
		{/*this refer to /hi3/whateverhere */}
		<Route path="/hi3/:something" component={Hi3} />
	</Route>
)
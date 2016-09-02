import React from 'react'
import ReactDOM from 'react-dom'
let Hello = React.createClass({
	render:function(){
		return <div>Hi</div>
	}
})

alert("HI")


ReactDOM.render(<Hello /> , document.querySelector('#app'))
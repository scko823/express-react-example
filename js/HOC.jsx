import React from 'react'
//first create a stateless functional component
//it does not have a this.state. It can only has props passed in
//It is a pure function, just input props, output a component 
const statelessButton = (props) => <button 
																	style={{"width":"255px", 
																	"height":"255px", 
																	"backgroundColor":
																	`rgb(${props.red},${props.green},${props.blue})`}} 
																	onMouseMove={props.changeColor} 
																	onMouseLeave={props.restoreColor} 
																	className="btn">{props.text}</button>


export const HOCFactory = (InnerComponent) => class extends React.Component{
	constructor(props){
		super(props)
		this.state={
			text:"Move the mouse around",
			red:"127",
			green:"127",
			blue:"127"
		}
		this.changeColor = this.changeColor.bind(this)
		this.restoreColor = this.restoreColor.bind(this)
	}
	restoreColor(){
		this.setState({"green": "127"})
		this.setState({"blue": "127"})
		this.setState({"red": "127"})
	}
	changeColor(e){
		// console.log(e.clientX)
		// console.log(e.clientY)
		this.setState({"green": e.clientX+''})
		this.setState({"blue": e.clientY+''})
		console.log(this.state)
	}
	render(){
		return <InnerComponent 
			changeColor={this.changeColor} 
			restoreColor={this.restoreColor}
			{...this.state} />
	}
	componentDidMount(){
		setTimeout(()=>{
			// lexical this in fat arrow function in es6 :) 
			this.setState({text:"right for green, bottom for blue"})
		},5000)
	}
}

export const myWarppedComponent = HOCFactory(statelessButton)

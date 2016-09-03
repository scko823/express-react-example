import React from 'react'
//first create a stateless functional component
//it does not have a this.state. It can only has props passed in
//It is a pure function, just input props, output a component 
const statelessButton = (props) => <button>{props.text}</button>


const HOCFactory = (InnerComponent) => class extends React.Component{
	constructor(props){
		super(props)
		this.state={text:"wrapped"}
	}
	render(){
		return <InnerComponent text={this.state.text} />
	}
	componentDidMount(){
		setTimeout(()=>{
			// lexical this in fat arrow function in es6 :) 
			this.setState({text:"wrapped and it has been 5 seconds"})
		},5000)
	}
}

export const myWarppedComponent = HOCFactory(statelessButton)

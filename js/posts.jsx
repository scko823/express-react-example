import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { populatePosts,startFetching } from './actions.jsx'
//this.props.posts from redux
//this.props.populatePosts from redux
//this.props.loading from redux
class Posts extends React.Component{
	constructor(props){
		super(props)
		this.fetchPosts = this.fetchPosts.bind(this)
	}
	fetchPosts(){
		this.props.startFetching()
		this.props.populatePosts()
	}
	render(){
		console.log(this.props)
		let posts = this.props.posts.map((post,i)=><li key={i}>{post.id} - {post.body}</li>)
		if (this.props.loading){
			return <div>LOADING</div>
		}else{
			return (
				<div>
					<button onClick={this.fetchPosts}>get more posts</button>
					<ul>
						{posts}
					</ul>
				</div>
			)
		}
		
	}
}

const mapStateToProps = ( state )=>{
	console.log("line 36 the state",state)
	return {
		loading:state.populatePosts.loading,
		posts:state.populatePosts.posts

	}
}

const mapDispatchToProps = ( dispatch )=>{
	return bindActionCreators({populatePosts:populatePosts,startFetching:startFetching},dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts)
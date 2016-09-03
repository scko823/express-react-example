import axios from 'axios'

export function startFetching (){
	return {
		type:"START_FETCHING",
	}
}


export function populatePosts(){
	let data = axios.get('http://jsonplaceholder.typicode.com/posts')
							.then((data)=>data.data.filter(post=>Math.random()<0.12))
	return {
		type:"LOAD_POSTS",
		payload:data
	}
}
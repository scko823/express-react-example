import { combineReducers } from 'redux'
let INITIAL_STATE = {
	loading:false,
	posts:[]
}

let populatePosts = (state=INITIAL_STATE, action)=>{
	switch (action.type){
		case "LOAD_POSTS":
			return { ...state, posts:action.payload,loading:false}
		case "START_FETCHING":
			return { ...state, loading:true}
		default:
			return state
	}
}


const rootReducer = combineReducers({
	populatePosts
})

export default rootReducer
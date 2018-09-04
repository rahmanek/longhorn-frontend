import { combineReducers } from 'redux'
import { VisibilityFilters } from '../Actions'


const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
  test:'test1'
}

function todoApp(state = initialState, action) {
	console.log(state)
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}


export default combineReducers({
  todoApp
})

import { combineReducers } from 'redux'
// import { VisibilityFilters } from '../Actions'

const groupList = [{
	name:"Malden City Group",
	channels:["Announcements","Book Club", "Events", "Library"],
	active:true
},{
	name:"PAX Conference",
	channels:["Announcements", "Questions"],
	active:false
},{
	name:"Boston Globe Group",
	channels: ["Announcments", "Sports Forum", "Metro", "Political Forum", "Tips"],
	active:false
},{
	name: "Admiral's Hill",
	channels: ["Announcments", "Events"],
	active:false
},{
	name: "ISGL",
	channels: ["Announcemnts","Events","Discussions", "Youth"],
	active:false
}];

const initialState = {
  groups: groupList
}

function groups(state = initialState, action) {
	// console.log(state)
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}


export default combineReducers({
  groups
})

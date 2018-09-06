import { combineReducers } from 'redux'

const groups = function (state, action) {
	switch (action.type){
		case "ADD_GROUP":
			return Object.assign({}, state, {
				list: (() => {
					var newList = state.list.slice()
					newList.push({
						name:action.name,
						channels:["General"]
					})
					return newList
				})()
			})
		case "CHANGE_GROUP":
			return Object.assign({}, state, {
				active: action.active
			})
		default:
			return {
				list: [{
						name:"Malden City Group",
						channels:["Announcements","Book Club", "Events", "Library"]
					},{
						name:"PAX Conference",
						channels:["Announcements", "Questions"]
					},{
						name:"Boston Globe Group",
						channels: ["Announcments", "Sports Forum", "Metro", "Political Forum", "Tips"]
					},{
						name: "Admiral's Hill",
						channels: ["Announcments", "Events"]
					},{
						name: "ISGL",
						channels: ["Announcemnts","Events","Discussions", "Youth"]
				}],
				active: 0
			}
	}
}


export default combineReducers({
  groups
})

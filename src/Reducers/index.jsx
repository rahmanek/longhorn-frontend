import { combineReducers } from 'redux'
import groupSample from '../Data Samples/groupSample.js'
import channelSample from '../Data Samples/channelSample.js'

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
			return groupSample
	}
}

const channels = function (state, action) {
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
			return channelSample
	}
}

const active = function (state, action) {
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
				channel:Object.keys(channelSample)[0],
				group: Object.keys(groupSample)[0]
			}
	}
}


export default combineReducers({
  groups,
  channels,
  active
})

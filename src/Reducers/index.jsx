import { combineReducers } from 'redux'
import groupSample from '../Data Samples/groupSample.js'
import channelSample from '../Data Samples/channelSample.js'

var initialGroupId = Object.keys(groupSample)[0]

const groups = function (state, action) {

	switch (action.type){
		case "CHANGE_GROUP":
			return Object.assign({}, state, {
				active: action.groupId
			})
		default:
			return {
				list:groupSample,
				active: initialGroupId
			}
	}
}

const channels = function (state, action) {

	switch (action.type){
		case "CHANGE_GROUP":
			var channelList = channelSample;
			var groupChannelList = [];
			Object.keys(channelList).map(channelId=>{
				if(channelList[channelId].groupId === action.groupId) groupChannelList.push(channelId)
			})
			return Object.assign({}, state, {
				visible: groupChannelList,
			})
		default:
			var channelList = channelSample;
			var groupChannelList = [];
			Object.keys(channelList).map(channelId=>{
				if(channelList[channelId].groupId === initialGroupId) groupChannelList.push(channelId)
			})
			return{
				list:channelList,
				visible:groupChannelList,
				active:Object.keys(channelSample)[0]
			}
	}
}


export default combineReducers({
  groups,
  channels
})

import { combineReducers } from 'redux'
import groupSample from '../Data Samples/groupSample.js'
import channelSample from '../Data Samples/channelSample.js'

var initialGroupId = Object.keys(groupSample)[0]

/***********			GROUPS			***********/
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
/***********			CHANNELS			***********/
const channels = function (state, action) {
	var channelList = [];
	var groupChannelList = [];
	var generalId = null;
	switch (action.type){
		case "CHANGE_GROUP":
			channelList = state.list
			Object.keys(channelList).map(channelId=>{
				if(channelList[channelId].groupId === action.groupId) groupChannelList.push(channelId)
				if(channelList[channelId].name === "general") generalId = channelId
			})
			return Object.assign({}, state, {
				visible: groupChannelList,
				general: generalId,
				active: generalId
			})
		case "CHANGE_CHANNEL":

			return Object.assign({}, state, {
				active: action.channelId,
			})
		default:
			channelList = channelSample;
			groupChannelList = [];
			Object.keys(channelList).map(channelId=>{
				if(channelList[channelId].groupId === initialGroupId)
				{
					groupChannelList.push(channelId)
					if(channelList[channelId].name == "general") generalId = channelId
				}

			})
			return{
				list:channelList,
				visible:groupChannelList,
				active:Object.keys(channelSample)[0],
				general: generalId
			}
	}
}


export default combineReducers({
  groups,
  channels
})

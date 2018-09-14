fs = require('fs');

var nameList = fs.readFileSync("./data/names.csv",'utf8').split("\r\n")
var channelNames = fs.readFileSync("./data/channels.csv",'utf8').split("\r\n")
var groupNames = fs.readFileSync("./data/communities.csv",'utf8').split("\r\n")
var messageList = fs.readFileSync("./data/messages.csv",'utf8').split("\r\n")

var groups = {}
for(var i = 0; i < 5; i++){
	groups['g' + require('crypto').randomBytes(12).toString('base64')] = {
		name: groupNames.splice(Math.floor(Math.random()*groupNames.length),1)[0]
	}
}

var channels = {}
var groupList =  Object.keys(groups);

for(var i = 0; i < groupList.length; i++){
	for(var j = 0; j <5; j++){
		var availableChannels = channelNames.slice();
		channels['c' + require('crypto').randomBytes(12).toString('base64')] = {
			groupId: groupList[j],
			name: availableChannels.splice(Math.floor(Math.random()*availableChannels.length),1)[0]
		}
	}
}

var users = {}
for(var i = 0; i < 25; i++){
		users['u' + require('crypto').randomBytes(12).toString('base64')] = {
			firstName: nameList[Math.floor(Math.random()*nameList.length)],
			lastName: nameList[Math.floor(Math.random()*nameList.length)],
			email: nameList[Math.floor(Math.random()*nameList.length)] + "@email.com",
			phone: "1" + Math.floor(Math.random()*9000000000+1000000000)
		}
}

var messages = {}
var channelList =  Object.keys(channels);

for(var i = 0; i < channelList.length; i++){
	for(var j = 0; j <50; j++){

		messages['m' + require('crypto').randomBytes(12).toString('base64')] = {
			channelId: channelList[i],
			body: messageList[Math.floor(Math.random()*messageList.length)]
		}
	}
}

fs.writeFileSync("../src/Data Samples/groupSample.js", "export default" + JSON.stringify(groups))
fs.writeFileSync("../src/Data Samples/channelSample.js", "export default" + JSON.stringify(channels))
fs.writeFileSync("../src/Data Samples/messageSample.js", "export default" + JSON.stringify(messages))
fs.writeFileSync("../src/Data Samples/userSample.js", "export default" + JSON.stringify(users))
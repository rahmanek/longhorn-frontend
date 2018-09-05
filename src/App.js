import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation.jsx';
import CreateGroupPopup from './Components/CreateGroupPopup.jsx';
import GroupBar from './Components/GroupBar.jsx';
import ChannelBar from './Components/ChannelBar.jsx';
import ChatBox from './Components/ChatBox.jsx';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Reducers'

const store = createStore(Reducer)

class App extends Component {
	constructor(props, context) {
	    super(props, context);

	    // initial state
	    this.state = {
			groups:[{
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
			}]
	    };
	  }

	groupActivation = (channel) => {
		var newGroups = this.state.groups.slice();
		newGroups.map((group,i)=>{
			if(group.name === channel){
				group.active = true;
			} else group.active = false;
			return null
		})
		this.setState({groups:newGroups})
	}

  render() {

    return (
		<Provider store={store}>
	      <div className="App">
				<Navigation />
				<CreateGroupPopup />
				<GroupBar/>
		  	 <div id="page">
				<ChannelBar groups={this.state.groups} />
				<ChatBox/>

		  	 </div>
	        {/* <header classNameName="App-header">
	          <img src={logo} classNameName="App-logo" alt="logo" />
	          <h1 classNameName="App-title">Welcome to React</h1>
	        </header>
	        <p classNameName="App-intro">
	          To get started, edit <code>src/App.js</code> and save to reload.
	        </p> */}
	      </div>
		</Provider>
    );
  }
}

export default App;

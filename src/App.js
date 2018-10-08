import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation.jsx';
import CreateGroupPopup from './Components/CreateGroupPopup.jsx';
import GroupBar from './Components/GroupBar.jsx';
import ChannelBar from './Components/ChannelBar.jsx';
import ChatBox from './Components/ChatBox.jsx';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Reducers/'

const store = createStore(Reducer)

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Navigation />
					<CreateGroupPopup />
					<GroupBar/>
					<div id="page">
						<ChannelBar/>
						<ChatBox/>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;

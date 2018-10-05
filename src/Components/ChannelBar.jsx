import React, { Component } from 'react';
import { connect } from 'react-redux'
class ChannelBar extends Component {

	render() {
		const groups = this.props.groups
		const channels = this.props.channels;
		console.log(this.props)
		return (
			<div id="chat-list">
				<a href="#4" className="user"><div className="avatar"></div>{groups.list[groups.active].name}</a>
				<ul className="chat-list scroll-hijack">
					<li>Channels</li>
					{
						channels.visible.map((channelId, i) =>{
							var channelStyle = "text-align-left";
							if (channels.active == channelId) channelStyle = channelStyle + " bold";
							return(<li className={channelStyle} key={i}><a href="#3" onClick={this.props.changeChannel} data-channelid={channelId} className="activeChannel">#  {channels.list[channelId].name}</a></li>)
						})
					}
				</ul>
				<ul className="chat-list scroll-hijack">
				<li>Members</li>
					<li className="text-align-left"><a href="#4" className="user"><div className="avatar"><img src="/img/placeholder-avatar3.jpg" alt="43"/></div>Omes000</a></li>
					<li className="text-align-left"><a href="#5" className="user"><div className="avatar"><img src="/img/placeholder-avatar4.jpg" alt="21"/></div>Msctchmn</a></li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {

	return {
		groups: state.groups,
		channels:state.channels
	}
}

const mapDispatchToProps = dispatch => {
	return {
	 	changeChannel: (e) =>
			dispatch({
				type: 'CHANGE_CHANNEL',
	 			channelId: e.target.dataset.channelid
			})
   }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelBar)

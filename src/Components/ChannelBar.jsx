import React, { Component } from 'react';
import { connect } from 'react-redux'
class ChannelBar extends Component {

	render() {
		const groups = this.props.groups
		const channels = this.props.channels;
		return (
			<div id="chat-list">
				<a href="#4" className="user"><div className="avatar"></div>{groups.list[groups.active].name}</a>
				<ul className="chat-list scroll-hijack">
					<li>Channels</li>
					{
						channels.visible.map((channelId, i) =>{
							console.log(channelId)
							return(<li className="text-align-left" key={i}><a href="#3" className="activeChannel">#  {channels.list[channelId].name}</a></li>)
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
		channels:state.channels,
		active: state.active
	}
}

const mapDispatchToProps = dispatch => {
  return {
    destroyTodo: () =>
      dispatch({
        type: 'DESTROY_TODO'
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelBar)

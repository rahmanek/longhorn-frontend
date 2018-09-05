import React, { Component } from 'react';
import { connect } from 'react-redux'
class ChannelBar extends Component {
  render() {
    return (
		 <div id="chat-list">
			  <a href="/users/@me" className="user"><div className="avatar"><img src="/img/placeholder-avatar2.jpg" alt="3"/></div>Ajawak</a>
			  <ul className="chat-list scroll-hijack">
				  <li>Channels</li>
				  {
					  this.props.groups[0].channels.map((channel, i) =>{
					  				 return(<li className="text-align-left" key={i}><a href="#3" className="activeChannel">#  {channel}</a></li>)
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
    reduxState:state
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

import React, { Component } from 'react';

class ChannelBar extends Component {
  render() {
console.log(this.props.groups[0].channels)
    return (
		 <div id="chat-list">
			  <a href="/users/@me" className="user"><div className="avatar"><img src="/img/placeholder-avatar2.jpg" /></div>Ajawak</a>
			  <ul className="chat-list scroll-hijack">
				  <li>Channels</li>
				  {
					  this.props.groups[0].channels.map((channel, i) =>{
					  				 return(<li className="text-align-left" key={i}><a href="#" className="activeChannel">#  {channel}</a></li>)
					  })

				  }
			  </ul>
			  <ul className="chat-list scroll-hijack">
				  <li>Members</li>
									<li className="text-align-left"><a href="#" className="user"><div className="avatar"><img src="/img/placeholder-avatar3.jpg" /></div>Omes000</a></li>
									<li className="text-align-left"><a href="#" className="user"><div className="avatar"><img src="/img/placeholder-avatar4.jpg" /></div>Msctchmn</a></li>
			  </ul>
		 </div>
    );
  }
}

export default ChannelBar;

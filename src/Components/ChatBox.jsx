import React, { Component } from 'react';
import { connect } from 'react-redux'
class ChatBox extends Component {
  render() {
	  var channels = this.props.channels;
// {channels.list[channels.active].name}
    return (
   		  <div id="chat" className="page">
   				<div className="page-header clearfix">
   					 <span>Test1</span>
   					 <ul>
   						   <li><a title="Online" href="#">Online - 1</a></li>
   					 </ul>
   				</div>
   				<div className="chat-body scroll-hijack">
   								<div className="chat-message">
   										  <div className="avatar"><img src="/img/placeholder-avatar0.jpg" /></div>
   										  <div className="chat-message-content">
   												<a href="#" className="chat-message-author">Wiseguy</a>
   												<span className="chat-message-date">1-3-1</span>
   												<div className="chat-message-message">
   														  This is a message
   												</div>
   										  </div>
   								</div>
   				</div>
   				<div className="chat-footer relative">
   					 <form id="message-form" action="">
   						  <input name="message" type="text" className="post-input" placeholder="Your Text..." />
   						  <button type="submit" className="post-button"><span className="caret-right"></span></button>
   					 </form>
   				</div>
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
    destroyTodo: () =>
      dispatch({
        type: 'DESTROY_TODO'
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatBox)

import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { addGroup } from '../Actions'

class GroupBar extends Component {
  render() {
    return (
		 <div id="sidebar">
   		  <ul className="sidebar-menu">
   				<li className="toggle-sidebar"><a href="#group" data-toggle="sidebar"><i className="fas fa-users"></i></a></li>
						{
							Object.keys(this.props.groups).map((group,i)=>{
								var activeGroup = this.props.groups[group]
								return (<li key={i}><a href="#activateGroup" className="current-server" data-toggle="tooltip" data-placement="right" data-title={activeGroup.name}>{activeGroup.name[0]}</a></li>)
							})
						}
   				<li><a href="#join" className="join-server" data-start="modal-custom" data-target="#create-group" data-toggle="tooltip" data-placement="right" data-title="Join a Group"><i className="fa fa-plus"></i></a></li>
   		  </ul>
   	 </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}



export default connect(
  mapStateToProps
)(GroupBar)

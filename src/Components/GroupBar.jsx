import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { addGroup } from '../Actions'

class GroupBar extends Component {

	render() {
			console.log(this)
			// this.props.changeGroup("g32")
		var groups = this.props.groups
		return (
			<div id="sidebar">
				<ul className="sidebar-menu">
					<li><a href="#changeGroup" data-toggle="tooltip" data-placement="right" data-title="Home"><i className="fas fa-home"></i></a></li>
					<li><a href="#changeGroup" data-toggle="tooltip" data-placement="right" data-title="Explore"><i class="far fa-compass fa-lg"></i></a></li>
						{
							Object.keys(groups.list).map((groupId,i)=>{
								var activeGroup = groups.list[groupId];
								var groupStyle = "";
								if(groupId === groups.active) groupStyle = "current-server"
								return (<li key={i}><a href="#changeGroup" className={groupStyle} data-groupId={groupId} onClick={this.props.changeGroup} data-toggle="tooltip" data-placement="right" data-title={activeGroup.name}>{activeGroup.name[0]}</a></li>)
							})
						}
					<li><a href="#join" className="join-server" data-start="modal-custom" data-target="#create-group" data-toggle="tooltip" data-placement="right" data-title="Join a Group"><i className="fa fa-plus"></i></a></li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
	  groups: state.groups
  }
}

const mapDispatchToProps = dispatch => {
  return {
	changeGroup: (e) =>
      dispatch({
        type: 'CHANGE_GROUP',
		  groupId: e.target.dataset.groupid
      })
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupBar)

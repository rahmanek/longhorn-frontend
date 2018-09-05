import React, { Component } from 'react';
import { connect } from 'react-redux'

class GroupBar extends Component {
  render() {
	  console.log(this.props)
    return (
		 <div id="sidebar">
   		  <ul className="sidebar-menu">
   				<li className="toggle-sidebar"><a href="#group" data-toggle="sidebar"><i className="fas fa-users"></i></a></li>
						{
							this.props.groups.map((group,i)=>{
								return (<li key={i}><a href="#7" className="current-server" data-toggle="tooltip" data-placement="right" onClick={()=>this.props.groupActivation(group.name)} data-title={group.name}>{group.name[0]}</a></li>)
							})
						}
   				<li><a href="#join" className="join-server" data-start="modal-custom" data-target="#create-group" data-toggle="tooltip" data-placement="right" data-title="Join a Group"><i className="fa fa-plus"></i></a></li>
   		  </ul>
   	 </div>
    );
  }
}

const mapStateToProps = state => {
  return state.groups
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
)(GroupBar)

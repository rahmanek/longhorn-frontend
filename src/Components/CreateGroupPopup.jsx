import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addGroup } from '../Actions'

class CreateGroupPopup extends Component {
	constructor(props) {
     super(props);
     this.state = {groupName: ''};

     this.handleChange = this.handleChange.bind(this);
   }


  handleChange(event){
	  this.setState({groupName:event.target.value})
  }


  render() {
    return (
		 <div id="create-group" className="modal-block-wrap">
			  <div className="modal-block">
					<div className="modal-brand">
						 <div className="modal-brand-caption">
							  <div className="logo">Mini<span>Cord</span></div>
						 </div>
					</div>
					<div className="modal-block-content">
						 <span className="modal-close"><i className="fas fa-times"></i></span>
						 <h3>Create a new Channel</h3>
						 <div className="form-horizontal">
							  <div className="form-group">
									<p className="label mb-10">Choose a Channel photo (max size: 64x64)</p>
									<label className="group-photo-placeholder avatar-placeholder" data-toggle="tooltip" data-title="Upload a channel photo" data-placement="bottom"><img src="/img/placeholder.png" alt="Place"/></label>
									<input id="group_photo" className="group-photo" type="file" />
							  </div>
							  <div className="form-group">
									<label>Group Name</label>
									<input type="text" name="channel_name" id="group_name" className="form-control" onChange={this.handleChange}/>
							  </div>
							  <div className="form-group">
									<p className="help-block2 mb-25">By creating a channel, you agree to MiniCord <a data-toggle="modal-custom" data-target="#login" className="clr-primary link-underline">Community Guidelines</a>.</p>
									<button className="btn btn-block btn-radius btn-primary" onClick={(e) => this.props.addGroup(this.state.groupName)}>Create Channel</button>
							  </div>
						 </div>
					</div>
			  </div>
		 </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
	return {
		addGroup: (name) =>{
			dispatch(addGroup(name))
		}
			// dispatch(addGroup(name))
 	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroupPopup)

import React, { Component } from 'react';

class CreateGroupPopup extends Component {
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
						 <form className="form-horizontal" method="POST" action="/channel/new">
							  <div className="form-group">
									<p className="label mb-10">Choose a Channel photo (max size: 64x64)</p>
									<label for="group_photo" className="group-photo-placeholder avatar-placeholder" data-toggle="tooltip" data-title="Upload a channel photo" data-placement="bottom"><img src="/img/placeholder.png" /></label>
									<input id="group_photo" className="group-photo" type="file" />
							  </div>
							  <div className="form-group">
									<label for="group_name">Group Name</label>
									<input type="text" name="channel_name" id="group_name" className="form-control" />
							  </div>
							  <div className="form-group">
									<p className="help-block2 mb-25">By creating a channel, you agree to MiniCord <a data-toggle="modal-custom" data-target="#login" className="clr-primary link-underline">Community Guidelines</a>.</p>
									<button type="submit" className="btn btn-block btn-radius btn-primary">Create Channel</button>
							  </div>
						 </form>
					</div>
			  </div>
		 </div>
    );
  }
}

export default CreateGroupPopup;

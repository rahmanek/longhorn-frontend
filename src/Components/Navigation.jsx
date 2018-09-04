import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
		<nav className="navbar" role="navigation">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a className="navbar-brand" href="/">Project Longhorn</a>
              </div>
              <div className="navbar-menu">

                      <a href="/users/logout" className="btn btn-primary">Logout</a>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;

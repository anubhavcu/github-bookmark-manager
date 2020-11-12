import React, { Component } from "react";
import { Route, NavLink, HashRouter as Router, Switch } from "react-router-dom";

export default class CurrentBookmarks extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container mt-4">
        <div>
          <NavLink activeClassName="active" to="/Search">
            <div className="search-page-button mb-4">
              {/* <span className="hiddenTextMovies"> */}
              {/* </span> */}
              <button className="btn btn-primary">Add more bookmarks..</button>
            </div>
          </NavLink>

          <div id="profile">
            <h3>CurrentBookmarks are shown here</h3>
          </div>
        </div>
      </div>
    );
  }
}

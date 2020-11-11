import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="container searchContainer">
        <div class="search card card-body">
          <h1>Search Users</h1>
          <p class="lead">
            Enter a Username to fetch a user profile and repos...{" "}
          </p>
          <input
            type="text"
            id="searchUser"
            class="form-control"
            placeholder="Github Username.. "
          />
        </div>
        <div id="profile"></div>
      </div>
    );
  }
}

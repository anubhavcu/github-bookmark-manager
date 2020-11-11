import React, { Component } from "react";

export default class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a href="#" class="navbar-brand">
            <h3>Github Bookmark Manager</h3>
          </a>
        </div>
      </nav>
    );
  }
}

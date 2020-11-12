import React, { Component } from "react";
import Title from "../Title";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Title />
        <div className="container">
          <h1>Search page</h1>
        </div>
      </div>
    );
  }
}

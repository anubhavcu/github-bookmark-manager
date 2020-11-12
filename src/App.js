import React, { Component } from "react";
import Home from "./components/pages/Home";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

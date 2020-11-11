import React, { Component } from "react";
import Title from "./components/Title";
import AddRepo from "./components/Search/AddRepo";
import CurrentBookmarks from "./components/CurrentBookmarks";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Title />
        <AddRepo />
        <CurrentBookmarks />
      </div>
    );
  }
}

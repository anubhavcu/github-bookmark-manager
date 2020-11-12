import React, { Component } from "react";
import Title from "../Title";
import CurrentBookmarks from "../CurrentBookmarks";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Title />
        <CurrentBookmarks />
      </div>
    );
  }
}

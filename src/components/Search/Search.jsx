import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="container ">
        <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button type="button" class="btn btn-secondary">
            Search
          </button>

          <div class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Title from "../Title";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "Users",
    };
    // this.onChangeValue = this.onChangeValue.bind(this);
  }
  // getRadioValue = () => {
  //   const element = document.getElementsByName("searchValue");
  //   for (let i = 0; i < element.length; i++) {
  //     if (element[i].checked) {
  //     }
  //   }
  // };
  // onChangeValue = (event) => {
  //   console.log(event.target.value);
  // };
  getBadgeClassName = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.searchValue === "Users" ? "primary" : "warning";
    return classes;
  };

  handleOptionChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    return (
      <div>
        <Title />
        <div className="container"></div>
        <div className="container searchContainer">
          <div className="search card card-body">
            <div className="form-check-inline">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="searchValue"
                  id="exampleRadios1"
                  value="Users"
                  checked={this.state.searchValue === "Users"}
                  // checked
                  onChange={this.handleOptionChange}
                />
                <label class="form-check-label" for="exampleRadios1">
                  Users
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="searchValue"
                  id="exampleRadios2"
                  value="Repositories"
                  checked={this.state.searchValue === "Repositories"}
                  onChange={this.handleOptionChange}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Repositories
                </label>
              </div>
            </div>

            <br />
            <h2>Type below to start searching..</h2>
            <p className="lead">
              Enter here to search for
              <span className={this.getBadgeClassName()}>
                {this.state.searchValue}
              </span>
            </p>
            <input type="text" id="searchUser" className="form-control" />
          </div>
        </div>
        <br />
        <div id="profile"></div>
      </div>
    );
  }
}

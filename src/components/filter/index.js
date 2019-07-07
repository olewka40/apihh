import React, { Component } from "react";
import SearchService from "../../services/search";
import "./index.css";

class Request extends Component {
  state = { value: "" };

  handleChange = event => {
    const value = event.target.value;
    SearchService.onSearch(value);
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <input
          className="input"
          autofocus="on"
          type="text"
          placeholder="Введите город:"
          onFocus={this.handleChange}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Request;

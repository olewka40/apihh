import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div className="vacancies">
        <div className="name">
          <Link to={`/AboutVacancie/${this.props.id}`}>{this.props.name}</Link>
        </div>
        <div className="corp"> {this.props.group}</div>
        <div className="corp"> {this.props.city}</div>
        <div className="corp"> Статус вакансии : {this.props.status}</div>
      </div>
    );
  }
}

export default Profile;

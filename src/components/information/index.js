import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Info extends React.Component {
  render() {
    return (
      <div>
        <div className="vacancies-info">
          <div className="name-info">{this.props.name}</div>
          {/* <div className="ZP-info">
            От {this.props.zarabotokOT} до {this.props.zarabotokTo}
          </div> */}
          <img alt="123" className="logo_original" src={this.props.url} />
          <div className="corp-info"> {this.props.group}</div>
          <div className="city-info"> {this.props.city}</div>
          <div className="opened-info">
            Вакансия в данный момент {this.props.opened}
          </div>
          <div
            className="description-info"
            dangerouslySetInnerHTML={{ __html: this.props.description }}
          />
        </div>
        <div>
          <button className="button">
            <Link to={`/`}>Вернуться к поиску вакансий</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Info;

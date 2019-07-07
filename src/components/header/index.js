import React from "react";
import "./index.css";
import Request from "../filter";
//Создаю шапку

class Header extends React.Component {
  render() {
    return (
      <div className="navi-top">
        <img
          alt="imgmmmggg"
          className="navi-top-logo"
          src="https://static.tildacdn.com/tild6133-3866-4033-a539-636362383537/logoHH_new_redai.png"
        />
        <Request />
      </div>
    );
  }
}

export default Header;

import React from "react";
import "./index.css";
//Создаю черную полоску
class NaviMenu extends React.Component {
  render() {
    return (
      <div className="navi-menu">
        <div className="blackMenu">
          <a href="" className="menu-item">
            Резюме
          </a>
          <a href="" className="menu-item">
            Вакансии
          </a>
          <a href="" className="menu-item">
            Услуги
          </a>
          <a href="" className="menu-item">
            Помощь
          </a>
          <a href="" className="menu-item">
            Компании
          </a>
          <a href="" className="menu-item">
            Проекты
          </a>
        </div>
      </div>
    );
  }
}

export default NaviMenu;

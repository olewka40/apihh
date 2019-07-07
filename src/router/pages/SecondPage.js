import React from "react";
import Header from "../../components/header";
import NaviMenu from "../../components/naviMenu";
import AboutVacancie from "../../components/aboutVacancie";

class VacanciesInformation extends React.Component {
  render() {
    const guid = this.props.match.params.id;
    return (
      <div className="vac">
        <Header />
        <NaviMenu />
        <AboutVacancie guidVacancie={guid} />
      </div>
    );
  }
}

export default VacanciesInformation;

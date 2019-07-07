import React from "react";
import { getVecancie } from "../../sources/vacancies";
import Info from "../information/index";

class AboutVacancie extends React.Component {
  state = {};

  componentDidMount() {
    this.loadVacancie();
  }

  loadVacancie = async () => {
    const vacancie = await getVecancie(this.props.guidVacancie);
    this.setState({
      ...vacancie
    });
  };
  render() {
    const {
      // area: { name: city },
      // employer: { name: group },
      area,
      employer,
      name,
      id,
      description,
      type
    } = this.state;
    const city = area && area.name;
    const group = employer && employer.name;
    const url = employer && employer.logo_urls.original;
    const opened = type && type.name;
    return (
      <Info
        key={id}
        city={city}
        group={group}
        name={name}
        url={url}
        id={id}
        description={description}
        opened={opened}
      />
    );
  }
}

export default AboutVacancie;

import React from "react";
import SearchService from "../../services/search";
import "./index.css";
import { getVacancies } from "../../sources/vacancies";
import Profile from "../filter/groupsFilter";

class Content extends React.Component {
  state = {};

  componentDidMount() {
    SearchService.on(this.handleSearch, "onSearch");
  }

  handleSearch = async value => {
    const vacancies = await getVacancies(value);
    this.setState({
      vacancies
    });
  };
  render() {
    const { vacancies } = this.state;
    return (
      <>
        {vacancies &&
          vacancies.map(
            ({
              area: { name: city },
              employer: { name: group },
              type: { name: status },
              name,
              id
            }) => {
              return (
                <Profile
                  key={id}
                  city={city}
                  group={group}
                  name={name}
                  id={id}
                  status={status}
                />
              );
            }
          )}
      </>
    );
  }
}

export default Content;

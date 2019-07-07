import axios from "axios";

export const getVacancies = async value => {
  const {
    data: { items }
  } = await axios.get(`https://api.hh.ru/vacancies?text=${value}`);
  return items;
};
export const getVecancie = async id => {
  const { data } = await axios.get(`https://api.hh.ru/vacancies/${id}`);

  return data;
};

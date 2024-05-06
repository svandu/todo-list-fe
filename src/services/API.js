import axios from "axios";

export default (url = "https://todo-list-api-n2mw.onrender.com/api/v1/") => {
  return axios.create({
    baseURL: url,
  });
};

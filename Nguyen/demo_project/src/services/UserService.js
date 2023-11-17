import axios from "axios";
const usersAPI = "https://jsonplaceholder.typicode.com//users";
const userService = {
  getUser: () => {
    return axios
      .get(usersAPI)
      .then((data) => {
        return data.data;
      })
      .catch((err) => console.log(err));
  },
};
export default userService;

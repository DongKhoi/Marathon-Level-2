import userService from "../services/UserService";
export const fetchData = () => async (dispatch) => {
  const data = await userService.getUser();
  console.log(data);
  dispatch({
    type: "fetchData",
    payload: data,
  });
};

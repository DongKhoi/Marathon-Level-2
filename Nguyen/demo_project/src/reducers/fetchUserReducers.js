const initialState = {
  users: [],
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchData":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default fetchUserReducer;

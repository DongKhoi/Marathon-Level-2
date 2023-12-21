// actions.js
import axios from 'axios';
// Import các hằng số actionTypes từ file actionTypes.js
import { ADD_TODO, REMOVE_TODO } from './actionTypes';

// Khởi tạo biến nextTodoId với giá trị ban đầu là 1 để đảm bảo mỗi todo có một id duy nhất
let nextTodoId = 1;

// Hàm action creator addTodo nhận vào một đoạn văn bản (text) và trả về một action
export const addTodo = (text) => ({
  type: ADD_TODO,  // Loại action là ADD_TODO, được định nghĩa trong actionTypes.js
  payload: {       // Dữ liệu được truyền đi với action, trong trường này là id và text của todo mới
    id: nextTodoId++,  // Sử dụng giá trị hiện tại của nextTodoId, sau đó tăng giá trị cho lần sử dụng tiếp theo
    text,
  },
});

// Hàm action creator removeTodo nhận vào một id và trả về một action
export const removeTodo = (id) => ({
  type: REMOVE_TODO,  // Loại action là REMOVE_TODO, được định nghĩa trong actionTypes.js
  payload: id,        // Dữ liệu được truyền đi với action, trong trường này chỉ là id của todo cần xóa
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});
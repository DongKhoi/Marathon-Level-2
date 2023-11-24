// reducers.js
// Import các hằng số actionTypes từ file actionTypes.js
import { ADD_TODO, REMOVE_TODO } from './actionTypes';

// Khởi tạo state ban đầu cho reducer, với một mảng todos trống
const initialState = {
    todos: [],
};

// Reducer cho chức năng quản lý todo
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        // Trường hợp khi action có loại ADD_TODO
        case ADD_TODO:
            return {
                ...state,
                // Thêm một todo mới vào mảng todos sử dụng payload của action
                todos: [...state.todos, action.payload],
            };
        // Trường hợp khi action có loại REMOVE_TODO
        case REMOVE_TODO:
            return {
                ...state,
                // Lọc ra các todo có id khác với id trong payload để xóa todo tương ứng
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        // Trường hợp mặc định, không có action nào khớp
        default:
            return state;
    }
};

// Xuất reducer để sử dụng trong cấu hình Redux của ứng dụng
export default todoReducer;

// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk
import todoReducer from './reducers';

// Sử dụng applyMiddleware để thêm Redux Thunk vào store
const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;

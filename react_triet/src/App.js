import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ComponentUser from './Components/componentUser';
import Customer from './Components/Customer';
import apiService from './Services/apiService'; 

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsFromApi = async () => {
      try {
        const result = await apiService.fetchPosts();
        setPosts(result); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchPostsFromApi();
  }, []);

  return (
    <Router>
      <div>
        <h1>Thông tin người dùng</h1>
        <ComponentUser />
        <Link to="/customer">
          <button>customer</button>
        </Link>
        <Routes>
          <Route path="/customer" element={<Customer />} />
        </Routes>
        <ul>
          {posts && posts.map(post => (
            <li key={post.id}>{post.title}</li> 
          ))}
        </ul>
      </div>
    </Router>
  );
}

export default App;

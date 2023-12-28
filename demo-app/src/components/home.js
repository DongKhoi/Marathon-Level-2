// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/apiService'; // Đường dẫn tùy thuộc vào cấu trúc thư mục của bạn

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const postsData = await apiService.fetchPosts();
    setPosts(postsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <h2>Home</h2>
      {/* Render the posts */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
            // Thay đổi "id" và "title" thành các trường tương ứng trong dữ liệu API của bạn
          ))}
        </ul>
      )}

      {/* Use Link to navigate to the "/about" route */}
      <Link to="/about">
        <button>Go to About</button>
      </Link>
      <Link to="/redux">
        <button>Go to Redux</button>
      </Link>
    </div>
  );
};

export default Home;
// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../Services/apiService';

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
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
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


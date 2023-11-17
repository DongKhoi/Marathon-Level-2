import Services from '../services/apiService'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const User = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchPosts = async () => {
    const postsData = await Services.fetchPosts();
    setPosts(postsData);
    setLoading(false)
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const [numberArray, setNumberArray] = useState([]);

  const addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);

    setNumberArray((prevNumberArray) => [...prevNumberArray, randomNumber]);
  };

  return (
    <div>
      <h2>So random</h2>
      {numberArray.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
      <button onClick={addRandomNumber}>Nhan vao day de push so</button>
      <br></br>
      <Link to="/customer">
        <button>Go customer</button>
      </Link>
      {loading ? (
        <p>loading</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
            ))};
        </ul>
      )};
    </div>
  )
};

export default User;

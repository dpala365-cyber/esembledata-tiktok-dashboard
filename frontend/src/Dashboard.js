import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Scheduled Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.description} - {post.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

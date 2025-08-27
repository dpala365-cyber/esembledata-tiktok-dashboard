import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [metrics, setMetrics] = useState({ followers: 0, likes: 0 });
  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(res => setMetrics(res.data.tikTokMetrics))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1>TikTok Dashboard</h1>
      <p>Followers: {metrics.followers}</p>
      <p>Likes: {metrics.likes}</p>
    </div>
  );
}

export default App;

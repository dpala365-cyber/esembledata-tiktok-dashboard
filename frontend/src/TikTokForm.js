import React, { useState } from 'react';

function TikTokForm() {
  const [video, setVideo] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoPath: video, description: desc, postAt: date })
    });
    setVideo(''); setDesc(''); setDate('');
    alert('Post scheduled!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Video Path" value={video} onChange={e => setVideo(e.target.value)} />
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
      <button type="submit">Schedule Post</button>
    </form>
  );
}

export default TikTokForm;

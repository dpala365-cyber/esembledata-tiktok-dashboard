async function uploadVideo(video) {
  // Replace this with real TikTok API integration
  console.log(`Simulated TikTok upload: ${video.title}`);
  return new Promise(resolve => setTimeout(resolve, 1000));
}

module.exports = { uploadVideo };

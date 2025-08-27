const tiktokService = require('./tiktokService');

const INTERVAL = 60 * 1000; // 1 min (adjust as needed)

function start() {
  console.log('Scheduler started...');

  setInterval(async () => {
    try {
      // Get videos from DB or JSON file
      let videos = [
        // Example structure:
        // { title: "Test Video", filePath: "./videos/video1.mp4" }
      ];

      console.log(`Found ${videos.length} videos to post...`);

      for (const video of videos) {
        try {
          await tiktokService.uploadVideo(video);
          console.log(`Video posted: ${video.title}`);
        } catch (err) {
          console.error(`Failed posting ${video.title}: ${err.message}`);
        }
      }
    } catch (err) {
      console.error('Scheduler error:', err.message);
    }
  }, INTERVAL);
}

module.exports = { start };

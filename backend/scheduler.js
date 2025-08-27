const cron = require("node-cron");
const tiktokService = require("./tiktokService"); // your TikTok posting logic

// Schedule for viral times: 11 AM and 6 PM
const schedule = process.env.CRON_TIME || "0 11,18 * * *";

console.log(`Scheduler started. Posting at: ${schedule}`);

cron.schedule(schedule, async () => {
  try {
    console.log("Running TikTok auto-post...");
    await tiktokService.postNextVideo(); // Implement this in tiktokService.js
    console.log("TikTok video posted successfully!");
  } catch (err) {
    console.error("Error posting TikTok video:", err);
  }
});

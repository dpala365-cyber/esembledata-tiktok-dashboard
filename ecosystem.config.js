module.exports = {
  apps: [
    {
      name: "esembledata-dashboard-backend",
      script: "./server.js",
      watch: false,
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 5000,
        TIKTOK_ACCESS_TOKEN: process.env.TIKTOK_ACCESS_TOKEN,
        MAX_CONCURRENT_POSTS: process.env.MAX_CONCURRENT_POSTS || 3,
        CRON_TIME: process.env.CRON_TIME || "0 11,18 * * *" // default 11AM & 6PM
      }
    }
  ]
};

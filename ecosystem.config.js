module.exports = {
  apps: [
    {
      name: 'esembledata-dashboard',
      script: './backend/server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      }
    }
  ]
};

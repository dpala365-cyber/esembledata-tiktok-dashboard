const os = require('os');
const { execSync } = require('child_process');

const tiktokText = `
🎥 New Dashboard Video! 🚀

Check our live dashboard:
🌐 Frontend: https://dashboard.example.com/
🖥 API: https://dashboard.example.com/api/status

#Dashboard #Analytics #TikTok #EsembleData
`;

try {
  if (os.platform() === 'win32') execSync(`echo ${JSON.stringify(tiktokText)} | clip`);
  else if (os.platform() === 'darwin') execSync(`echo ${JSON.stringify(tiktokText)} | pbcopy`);
  else execSync(`echo ${JSON.stringify(tiktokText)} | xclip -selection clipboard`);
  console.log('✅ TikTok template copied to clipboard!');
} catch (err) {
  console.error('❌ Failed to copy TikTok template', err);
}

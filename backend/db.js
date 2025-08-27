const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./posts.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    videoPath TEXT,
    description TEXT,
    postAt TEXT,
    status TEXT
  )`);
});

function insertPost(post) {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare("INSERT INTO posts (videoPath, description, postAt, status) VALUES (?, ?, ?, ?)");
    stmt.run(post.videoPath, post.description, post.postAt, post.status, function(err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, ...post });
    });
    stmt.finalize();
  });
}

function getAllPosts() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM posts", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function getPostById(id) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

function updatePostStatus(id, status) {
  return new Promise((resolve, reject) => {
    db.run("UPDATE posts SET status = ? WHERE id = ?", [status, id], function(err) {
      if (err) reject(err);
      else resolve(true);
    });
  });
}

module.exports = { insertPost, getAllPosts, getPostById, updatePostStatus };

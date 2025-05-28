const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Home route serves index.html with navbar
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for Climate Crisis
app.get('/climate-crisis', (req, res) => {
  res.send('<h1>Climate Crisis</h1><p><a href="https://github.com/RamanujaMohanty/ca-fire-site" target="_blank">View GitHub Repo</a></p>');

});

// Route for Typesetting
app.get('/typesetting', (req, res) => {
  res.send('<h1>Typesetting</h1><p><a href="https://github.com/yourusername/typesetting-repo">View GitHub Repo</a></p>');
});

// Route for Four Algorithms
app.get('/four-algorithms', (req, res) => {
  res.send('<h1>Four Algorithms</h1><p><a href="https://github.com/yourusername/four-algorithms-repo">View GitHub Repo</a></p>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

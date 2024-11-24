const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, '')));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Timeline page
app.get('/timeline.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'timeline.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

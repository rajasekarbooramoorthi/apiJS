// app.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Node.js API!');
});

// Sample API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Another sample POST endpoint
app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.json({ message: `Hello, ${name}!` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
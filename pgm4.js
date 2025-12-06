const express = require('express');
const app = express();
const port = 2000;
app.use(express.json());
app.post('/message', (req, res) => {
  console.log('Received POST request to /message');
  console.log('Request Body:', req.body);
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'No JSON data provided in the request body.'
    });
  }
  const { name, query } = req.body;
  let conversationMessage = 'Hello there!';
  if (name && query) {
    conversationMessage = `Hi ${name}! Thanks for your message: "${query}". I received it loud and clear.`;
  } else if (name) {
    conversationMessage = `Nice to meet you, ${name}! How can I help you today?`;
  } else if (query) {
    conversationMessage = `I received your query: "${query}". Let me look into that for you.`;
  } else {
    conversationMessage = `I received your request, but couldn't quite understand it. Can you please elaborate?`;
  }
  res.json({
    status: 'success',
    message: conversationMessage,
    receivedData: req.body
  });
});
app.get('/', (req, res) => {
  res.send('Server is running. Send a POST request to /message with JSON data.');
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


// curl -X POST -H "Content-Type: application/json" -d "{\"query\": \"Tell me a joke.\"}" http://localhost:2000/message

// install cors: npm install express cors


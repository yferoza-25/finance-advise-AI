const express = require('express');
const app = express();
const PORT = 3000;
app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name} ! Welcome to the URL parameter example.`);
});
app.listen(PORT, () => {
    console.log(`Try navigating to http://localhost:${PORT}/Hello/World`);
});
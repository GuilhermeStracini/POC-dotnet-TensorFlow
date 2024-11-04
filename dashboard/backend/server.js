const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Pixeebot Activity Dashboard Backend');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// TODO: Integrate with code scanning tools and process data

module.exports = app;
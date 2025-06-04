const express = require('express');
const app = express();
const port = 3000
const greeting = require('./modulePractice');

app.get('/', (req, res) => {
  res.send('Created! @ Homepage')
})
app.get('/about', (req, res) => {
  res.send('Created @ About!')
})
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
app.get('/greet/:username', (req, res) => {
  const username = req.params.username;
  const message = greeting(username);
  res.send(message);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// Notice: GET doesn't support request body, we should use POST
app.post('/hello', (req, res) => {
  const params = req.body as { name: string }
  res.send(`Hello, ${params.name} (POST)`)
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000')
});

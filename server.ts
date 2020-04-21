import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/hello1/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello1, ${name} (GET)`);
});

// Notice: GET doesn't support request body, we should use POST
app.post('/hello2', (req, res) => {
  const params = req.body as { name: string }
  res.send(`Hello2, ${params.name} (POST)`)
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000')
});

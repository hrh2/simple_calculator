const express = require('express');
const bodyParser = require('body-parser');
let PORT=process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

// Route for addition API
app.get('/addition', (req, res) => {
  const numbers = req.query.numbers;
  if (!numbers) {
    return res.status(400).json({ error: 'Numbers are required' });
  }

  const sum = numbers.reduce((acc, number) => acc + parseInt(number), 0);
  return res.status(200).json({ sum });
});

// Route for multiplication API
app.get('/multiplication', (req, res) => {
  const numbers = req.query.numbers;
  if (!numbers) {
    return res.status(400).json({ error: 'Numbers are required' });
  }

  const product = numbers.reduce((acc, number) => acc * parseInt(number), 1);
  return res.status(200).json({ product });
});

app.listen(PORT, () => {
    console.log(`Calculator app listening at http://localhost:${PORT}`);
  });



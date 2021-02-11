import express from 'express';
import products from './ProductsData.js';
import cars from './CarsData.js';

const app = express();

// respond with "hello world" when a GET request is made to the homepage
const port = 3000;

app.get('/', (req, res) => {
  //   res.send('Hello World!')
  res.json(products);
});

app.get('/cars', (req, res) => {
  res.status(200).json(cars);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

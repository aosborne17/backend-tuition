import express from 'express'
import products from './data.js'

const app = express()


// respond with "hello world" when a GET request is made to the homepage
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.json(products)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
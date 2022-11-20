const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Programming Language Course Server')
})

app.listen(port, () => {
  console.log(`Programming Language Course Server running on port ${port}`)
})
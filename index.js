const express = require('express')
const app = express()
const port = 5000

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
  res.send('Programming Language Course Server')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = categories.find(course => course.id === id);
    res.send(selectedCourse);
})


app.listen(port, () => {
  console.log(`Programming Language Course Server running on port ${port}`)
})
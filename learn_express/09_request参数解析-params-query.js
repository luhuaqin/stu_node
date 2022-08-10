const express = require('express')

const app = express()

// app.get('/queryInfo/:id/:other', (req, res, next) => {
//   console.log(req.params)
//   res.end('success')
// })

app.get('/queryInfo', (req, res, next) => {
  console.log(req.query)
  res.end('success')
})

app.listen(8000, () => {
  console.log('server start success')
})

const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('普通中间件')
  next()
})

app.get('/home', (req, res, next) => {
  console.log('home path middleware 01')
  next()
})

app.get('/home', (req, res, next) => {
  console.log('home path middleware 02')
  next()
}, (req, res, next) => {
  console.log('home path middleware 03')
  next()
}, (req, res, next) => {
  console.log('home path middleware 04')
  next()
}, (req, res, next) => {
  console.log('home path middleware 05')
  res.end('over')
})

app.listen(8000, () => {
  console.log('express服务器启动成功')
})

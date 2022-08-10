const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('普通中间件')
  next()
})

app.get('/home', (req, res, next) => {
  console.log('get path middleware')
  res.end('home')
})

app.post('/login', (req, res, next) => {
  console.log('post path middleware')
  res.end('login')
})

app.listen(8000, () => {
  console.log('express服务器启动成功')
})

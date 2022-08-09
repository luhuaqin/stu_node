const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('01中间件')
  res.end('hello middleware')
  next()
})
app.use((req, res, next) => {
  console.log('02中间件')
  next()
})
app.use((req, res, next) => {
  console.log('03中间件')
})

app.listen(8000, () => {
  console.log('express服务器启动成功')
})

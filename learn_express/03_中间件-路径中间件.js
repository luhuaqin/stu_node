const express = require('express')

const app = express()

// 永远先调用第一个中间件，需要执行后面中间件则需要调用next
app.use((req, res, next) => {
  console.log('普通中间件')
  next()
})

app.use('/home', (req, res, next) => {
  console.log('路径匹配中间件')
  res.end('hello middleware')
})

app.listen(8000, () => {
  console.log('express服务器启动成功')
})

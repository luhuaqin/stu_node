const express = require('express')

// express是一个函数，返回app
const app = express()

// 监听默认路径
app.get('/', (req, res, next) => {
  res.end('hello express')
})

// post请求
app.post('/login', (req, res, next) => {
  res.end('welcome back')
})

// 开启监听
app.listen(8000, () => {
  console.log("express服务器启动成功")
})

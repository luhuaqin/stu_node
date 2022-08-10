const fs = require('fs')

const express = require('express')
const morgan = require('morgan')  //保存日志插件

const app = express()

const writerStream = fs.createWriteStream('./logs/access.log', {
  flags: 'a+'
})

app.use(morgan("combined", { stream: writerStream }))  // combined保存日志格式

app.get('/home', (req, res, next) => {
  res.end('hello world')
})

app.listen(8000, () => {
  console.log('server start success')
})


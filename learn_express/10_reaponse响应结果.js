const express = require('express')

const app = express()

app.get('/queryInfo', (req, res, next) => {
  console.log(req.query)

  // 设置响应码
  res.status(204)

  // res.type('application/json')
  // res.end(JSON.stringify({name: 'lulu'))

  res.json('aaa')
})

app.listen(8000, () => {
  console.log('server start success')
})

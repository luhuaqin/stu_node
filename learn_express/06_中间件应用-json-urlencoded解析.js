const express = require('express')

const app = express()

// 手动处理json
// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/json") {
//     req.on('data', (data) => {
//       console.log(data.toString())
//       const info = JSON.parse(data.toString())
//       req.body = info
//       next()
//     })
//   }else {
        // next()
    // }
// })

// express内置函数: body-parser
app.use(express.json())
/**
 * extended:
 *    true: 对urlencoded进行解析时使用的是第三方库qs
 *    false: 对urlencoded进行解析时，使用的是node内置模块：querystring
 */
app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('welcome')
})

app.post('/product', (req, res, next) => {
  console.log(req.body)
  res.end('thanks')
})

app.listen(8000, () => {
  console.log('express 服务器启动成功')
})

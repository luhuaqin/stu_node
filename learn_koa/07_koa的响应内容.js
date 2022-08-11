const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  // ctx.response.body = {
  //   name:'luhuaqin',
  //   age: 20
  // }

  // ctx.status = 200
  // ctx.response.body = ['luhuaqin', 20]

  ctx.body = 'hello koa'   // koa响应数据也可以这样写
})

app.listen(8000, () => {
  console.log("server start success")
})

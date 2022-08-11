const Koa = require('koa')
const koaMulter = require('koa-multer')  // 第三方解析koa request中form-data格式的数据

const app = new Koa()

const upload = koaMulter()

app.use(upload.any())

app.use((ctx, next) => {
  console.log(ctx.req.body)  // koa-multer中获取到的数据放到了原生http的req中，而不是koa的request中
  console.log(ctx.request.body)
  ctx.response.body = 'koa-bodyParser'
})

app.listen(8000, () => {
  console.log('server start success')
})

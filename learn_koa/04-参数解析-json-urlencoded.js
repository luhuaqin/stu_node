const Koa = require('koa')
const bodyParser = require('koa-bodyparser')  // 第三方解析koa request中json、urlencoded格式的数据
const koaMulter = require('koa-multer')  // 第三方解析koa request中form-data格式的数据

const app = new Koa()

const upload = koaMulter()

app.use(bodyParser())
app.use(upload.any())

app.use((ctx, next) => {
  console.log(ctx.request.body)
  ctx.response.body = 'koa-bodyParser'
})

app.listen(8000, () => {
  console.log('server start success')
})

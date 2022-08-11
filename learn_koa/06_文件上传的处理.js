const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const koaMulter = require('koa-multer')

const app = new Koa()
const uploadRouter = new Router({ prefix: '/upload' })

const storage = koaMulter.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = koaMulter({
  // dest: './uploads/'
  storage
})

// upload.single(filename)：发送请求时文件名要和定义的文件名一致
uploadRouter.post('/avator', upload.single('avator'), (ctx, next) => {
  console.log(ctx.req.file)
  ctx.response.body = "upload success"
})

app.use(uploadRouter.routes())
app.use(uploadRouter.allowedMethods())

app.listen(8000, () => {
  console.log("server start success")
})

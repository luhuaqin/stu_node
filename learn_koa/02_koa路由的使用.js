const Koa = require('koa')
// const Router = require('koa-router')  // 第三方路由插件koa-router，提供koa未提供的直接.请求方法的操作方式
const userRouter = require('./router/user')

const app = new Koa()

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())  // 定义允许请求的结果

app.listen(8000, () => {
  console.log('server start success')
})

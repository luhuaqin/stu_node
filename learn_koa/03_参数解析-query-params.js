const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

// 这种方式拿不到params
// app.use((ctx, next) => {
//   console.log(ctx.request.params)
//   console.log(ctx.request.query)
//   console.log(ctx.request.url)
// })

// 拿params需要用这种方式
const userRouter = new Router({ prefix: '/users' })

userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.params)
  console.log(ctx.request.query)
})

app.use(userRouter.routes())

app.listen(8000, () => {
  console.log('server start success')
})

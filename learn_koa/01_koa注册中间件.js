const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  if(ctx.request.url === '/login') {
    if(ctx.request.method === 'GET') {
      ctx.response.body = 'welcome'
    }
  }else {
    ctx.response.body = 'other response'
  }
})

app.listen(8000, () => {
  console.log("server start success")
})

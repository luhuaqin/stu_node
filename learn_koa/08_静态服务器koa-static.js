const Koa = require('koa')
const koaServer = require('koa-static')

const app = new Koa

app.use(koaServer('../build'))

app.listen(8000, () => {
  console.log('server start success')
})

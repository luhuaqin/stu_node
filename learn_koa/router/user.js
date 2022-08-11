const Router = require('koa-router')

const router = new Router({ prefix: '/users' })  // 定义url前缀

router.put('/', (ctx, next) => {
  ctx.response.body = 'put methods'
})

router.get('/', (ctx, next) => {
  ctx.response.body = 'user list'
})

module.exports = router

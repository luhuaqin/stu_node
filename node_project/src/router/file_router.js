const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth_middleware')
const { avatarHandler } = require('../middleware/file_middleware')
const { saveAvatarInfo } = require('../controller/file_controller')

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatarInfo )  // 上传图片

module.exports = fileRouter

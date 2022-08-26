const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth_middleware')
const { avatarHandler, pictureHandler, pictureResize } = require('../middleware/file_middleware')
const { saveAvatarInfo, savePictureInfo } = require('../controller/file_controller')

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatarInfo )  // 上传头像
fileRouter.post('/picture', verifyAuth, pictureHandler, pictureResize, savePictureInfo)  // 上传文章配图

module.exports = fileRouter

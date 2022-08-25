const Multer = require('koa-multer')
const { AVATAR_PATH, PICTURE_PATH } = require('../constants/file_path')

// 头像上传处理
const avatarUpload = Multer({
  dest: AVATAR_PATH
})
const avatarHandler = avatarUpload.single('avatar')

// 文章配图上传处理
const pictureUpload = Multer({
  dest: PICTURE_PATH
})
const pictureHandler = pictureUpload.array('picture', 9)

module.exports = {
  avatarHandler,
  pictureHandler
}

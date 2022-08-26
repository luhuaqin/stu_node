const Multer = require('koa-multer')
const Jimp = require('jimp')
const path = require('path')

const { AVATAR_PATH, PICTURE_PATH } = require('../constants/file_path')

// 头像上传处理
const avatarUpload = Multer({
  dest: AVATAR_PATH
});
const avatarHandler = avatarUpload.single('avatar');

// 文章配图上传处理
const pictureUpload = Multer({
  dest: PICTURE_PATH
});
const pictureHandler = pictureUpload.array('picture', 9);

const pictureResize = async (ctx, next) => {
  // 获取所有的图像信息
  const files = ctx.req.files

  // 对图像进行处理(sharp/jimp)
  for (const file of files) {
    const destPath = path.join(file.destination, file.filename)
    Jimp.read(file.path).then(image => {
      image.resize(1280, Jimp.AUTO).write(`${destPath}-large`)
      image.resize(640, Jimp.AUTO).write(`${destPath}-middle`)
      image.resize(320, Jimp.AUTO).write(`${destPath}-small`)
    })
  }

  await next()
}

module.exports = {
  avatarHandler,
  pictureHandler,
  pictureResize
}

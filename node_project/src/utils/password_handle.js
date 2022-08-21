const crypto = require('crypto')  // node自带

const md5password = (password) => {
  const md5 = crypto.createHash('md5')
  // update需要传入字符串，纯数字会报500Internal Server Error
  const result = md5.update(password).digest('hex')  // 以十六进制的字符串返回，digest默认返回二进制
  return result;
}

module.exports = md5password

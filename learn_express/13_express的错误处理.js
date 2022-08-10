const express = require('express')

const app = express()

const USERNAME_DOES_NOT_EXISTS = 'USERNAME_DOES_NOT_EXISTS'
const USERNAME_ALREADY_EXISTS = 'USERNAME_ALREADY_EXISTS'

app.post('/login', (req, res, next) => {
  // 登录在数据中查询用户名时，发现不存在
  const isLogin = false
  if(isLogin) {
    res.json("user login success")
  } else {
    // res.status(400)
    // res.json("username does not exists")
    next(new Error(USERNAME_DOES_NOT_EXISTS))
  }
})

app.post('/register', (req, res, next) => {
  // 注册时在数据中查询用户名时，发现已存在
  const isExists = false
  if(isExists) {
    res.json("user register success")
  } else {
    // res.status(400)
    // res.json("username already exists")
    next(new Error(USERNAME_ALREADY_EXISTS))
  }
})

// 前面中间件如果调用next时传入参数，代表出错，会执行下面的中间件
app.use((err, req, res, next) => {
  let status = 400
  let message = '' 
  switch(err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      message = 'username does not exists'
      break
    case USERNAME_ALREADY_EXISTS:
      message = 'username already exists'
      break
    default:
      message = 'not found'
  }

  res.status(status)
  res.json({
    errCode: status,
    errMessage: message
  })
})

app.listen(8000, () => {
  console.log("server start success")
})

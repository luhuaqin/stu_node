const path = require('path')

const express = require('express')
const multer = require('multer')  // 上传文件插件

const app = express()

// app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 文件操作
const storage = multer.diskStorage({  // 用这种方式不会自动生成文件夹，
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname) )
  }
})
const upload = multer({
  // dest: './uploads/' // 直接使用文件不可定义文件名及后缀，如果目录中没有uploads文件夹会直接自动生成uploads文件夹
  storage
})
// app.use(upload.any());  // 不能使用.any()作为全局中间件中使用

app.post('/login', upload.any(), (req, res, next) => {
  console.log(req.body)
  res.end('welcome back')
})

app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log(req.file)
  res.end('file upload success')
})

app.listen(8000, () => {
  console.log('server start success')
})
